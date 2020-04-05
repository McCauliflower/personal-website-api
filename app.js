const express = require('express')
const { successResponse, errorResponse } = require("./utils/responses.cjs")
const logger = require('./utils/logger.cjs');

const app = express()
const port = process.env.PORT || 4000;
path = require('path')

app.use('/nodejs/static', express.static('public'));

app.get('/nodejs', logger, (req, res) => {
  res.send(successResponse('Electric Alchemy node.js server'))
})
app.listen(port, () => {
  console.log(`Your server is running on port:${port}`)
});
