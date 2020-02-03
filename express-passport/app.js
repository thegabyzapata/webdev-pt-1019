require("dotenv").config();

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
const flash = require("flash");
const { setLog } = require("@faable/flogg");
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
app.use(flash());

require("./passport")(app); // This automatically requires index.js in this folder

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
app.use((req, res, next) => {
  console.log(req.session);
  res.locals.user = req.user;
  if (req.user) {
    // Existe el usuario
    req.user.visitas += 1;
    req.user.save();
  }
  res.locals.errors = req.session.flash.map(e => e.message);
  next();
});

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const indexRouter = require("./routes/index.router");
app.use("/", indexRouter);

const authRouter = require("./routes/auth.router");
app.use("/auth", authRouter);

module.exports = app;
