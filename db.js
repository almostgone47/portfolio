const { Client } = require('pg');
let dbName = 'portfolio_api_development';
let hostname = 'localhost'

if (process.env.NODE_ENV === 'test') {
    dbName = 'test'
}
if (process.env.NODE_ENV === 'production') {
    hostname = 'database'
}

const client = new Client({
    host: hostname,
    user: 'postgres',
    database: dbName,
    port: 5432
});

client.connect((err) => {
    if (err) {
        console.log('Connection Error: ', err)
    } else {
        console.log('Connected to the db!');
    }
})

module.exports = {
    getBlogs: (callback) => {
        client.query('SELECT * FROM blogs', (err, data) => {
            console.log('burp! WHAT:!?!:!?', err, data)
            if (err) {
                callback(err)
            } else {
                console.log('dada', data)
                callback(null, data)
            }
        })
    },
    findUser: (user, callback) => {
        console.log('Third, its getting users from DB...', user)
        client.query('SELECT * FROM users WHERE username = $1', [user.username], (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log('findUser in DB: ', data.rows)
                callback(null, data)
            }
        })
    },
    addUser: (user, callback) => {
        client.query('INSERT INTO users(username, password) VALUES($1, $2) RETURNING *', [user.username, user.password], (err, data) => {
            console.log('from DB, addingUser')
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}