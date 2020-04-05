const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const routes  = require('./routes/index')

app.use('/server', express.static('public'));
routes(app)

app.listen()
