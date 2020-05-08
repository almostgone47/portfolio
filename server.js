const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./db.js');
const port = 5000;
const routes = require('./routes.js');
const auth = require('./auth.js');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.static(path.join(__dirname, '../client/public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

auth(app, db)

routes(app, db);

app.listen(port, () => console.log('Listening on port: ' + port));