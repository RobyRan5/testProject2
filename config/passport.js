var passport = require("passport");
var LocalStrategy = require("passpor-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(

    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.FindOne({
            where: {
                email: email
            }
        }).then(function(dbUser) {
            if (!dbUser) {
                return done(null, false, {
                    message: "Email Not Recognized"
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect Password."
                });
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(onj, cb) {
  cb(null, ob);  
});

module.exports = passport;
