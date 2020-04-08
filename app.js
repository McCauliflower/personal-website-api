const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const routes  = require('./routes/index.cjs')
const bodyParser = require('body-parser');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/server', express.static('public'));

routes(app)

app.listen()
