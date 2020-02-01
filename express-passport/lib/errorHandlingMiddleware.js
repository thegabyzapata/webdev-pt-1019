const Sentry = require("@sentry/node");
Sentry.init({ dsn: process.env.SENTRY_DSN });

module.exports = (err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // Send the error to sentry for analysis
  console.log("capturing");
  Sentry.captureException(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render("error");
  }
};
