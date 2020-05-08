const passport = require('passport');
const cookieSession = require('cookie-session');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = (app, db) => {
    app.use(cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.SESSION_SECRET]
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        console.log('Second it hits serializeUser: ', user.username)
        done(null, user.username);
    });
    passport.deserializeUser((username, done) => {
        console.log('DESERIALIZE USERRRRRRRRRRRRRR: ', username)
        db.findUser({username: username}, (err, user) => {
            done(null, user);
        });
    });

    passport.use(new LocalStrategy(
        (username, password, done) => {
            console.log("LOcal strategy before DB query: ")
            db.findUser({ username: username }, function (err, user) {
                // console.log('LocalStrategy: ', 'UN: ', username, 'PW:', password, 'User from DB: ', user.rows[0].password)
                if (err) { return done(err); }
                if (!user) {    
                    return done(null, false);
                }
                if (!bcrypt.compareSync(password, user.rows[0].password)) {
                    return done(null, false);
                }
                console.log('FIrst it hits LocalStrategy: ', user.rows[0])
                return done(null, user.rows[0]);
            });
        }
    ));
}