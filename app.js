const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const routes  = require('./routes/index.cjs')
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/server', express.static('public'));
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
routes(app)

app.listen(port, () => {
  console.log(`Your server is running on port:${port}`)
});
