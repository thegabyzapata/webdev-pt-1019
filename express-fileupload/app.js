const dotenv = require("dotenv");
dotenv.config();
dotenv.load({ path: __dirname + "/.private.env" });

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
const { setLog } = require("@faable/flogg");
const _ = require("lodash");
const { asyncController } = require("./lib/asyncControler");

setLog("express-passport");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
require("./passport")(app); // This automatically requires index.js in this folder
app.use(flash());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

/*
  - Imprime la sesion actual por consola
  - Configura la variable del usuario para todas las vistas
  - Configura la variable de los mensajes flash para las vistas
*/
app.use(
  asyncController(async (req, res, next) => {
    //console.log(req.session);
    res.locals.user = req.user;
    if (req.user) {
      // Existe el usuario
      req.user.visitas += 1;

      // CHECK THIS: This is a promise to ensure there are no race conditions when saving a user in a controller function
      await req.user.save();
    }

    // const errors = req.flash("error");
    // res.locals.errors = errors;
    // const info = req.flash("info");
    // res.locals.info = info;

    // Get all messages from types
    const messageTypes = [
      { flashName: "error", className: "danger" },
      { flashName: "info", className: "info" }
    ];
    res.locals.messages = _.flatten(
      messageTypes.map(({ flashName, className }) =>
        req.flash(flashName).map(message => ({ type: className, message }))
      )
    );
    next();
  })
);

// default value for title local
app.locals.title = "Fileupload";

const indexRouter = require("./routes/index.router");
app.use("/", indexRouter);

const authRouter = require("./routes/auth.router");
app.use("/auth", authRouter);

const userRouter = require("./routes/user.router");
app.use("/user", userRouter);

module.exports = app;
