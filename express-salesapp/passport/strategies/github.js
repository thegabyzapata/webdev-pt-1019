const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const User = require("../../models/User");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    async function(accessToken, refreshToken, profile, cb) {
      console.log(profile);

      const existingUser = await User.findOne({ githubId: profile.id });
      if (existingUser) {
        // User already exists, then update it's name from github
        existingUser.username = profile.emails[0].value;
        existingUser.picture = profile.photos[0].value;
        console.log(`Welcome again Github user ${existingUser.username}`);
        await existingUser.save();
        return cb(null, existingUser);
      } else {
        const newUser = await User.create({
          username: profile.emails[0].value,
          picture: profile.photos[0].value,
          githubId: profile.id
        });
        console.log(`New user from Github ${newUser.username}`);
        return cb(null, newUser);
      }
    }
  )
);
