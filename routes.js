const passport = require('passport');
const bcrypt = require('bcrypt');

module.exports = (app, db) => {
    app.post('/api/login', passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
        req.login(req.user, () => {
            console.log("You've logged in successfully!!", req.user)
        });
        res.send({ id: req.user.id, username: req.user.username });
    });

    app.get('/api/current_user', (req, res) => {
        console.log('getting current_user...', req.user)
        if (req.user) {
            res.send({id: req.user.rows[0].id, username: req.user.rows[0].username})
        } else {
            res.send()
        }
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.post('/api/signup', (req, res, next) => {
        const hash = bcrypt.hashSync(req.body.password, 8);
        console.log("User alrady exists! sdfgsdfgadsfasfasdfaa", req.body.username)

        db.findUser({ username: req.body.username }, function (err, user) {
            if(err) {
                next(err);
            } else if (user.rows.length) {
                res.redirect('/');
            } else {
                db.addUser({ username: req.body.username, password: hash}, (err, doc) => {
                    if(err) {
                        console.log("Couldn't save new user: ", err)
                        res.redirect('/');
                    } else {
                        console.log('Saved User!!')
                        next(null, user);
                    }
                }
                )
            }
        })},
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
        res.redirect('/api/blogs');
    }
    );

    app.get('/api/blogs', (req, res) => {
        db.getBlogs((err, results) => {
            if (err) {
                console.log(err)
            } else {
                res.send(results.rows)
            }
        })
    })
}