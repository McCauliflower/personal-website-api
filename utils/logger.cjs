const logger = (req, res, next) => {
  console.log(`${req.method} request sent at ${new Date()} to the "${req.url}" endpoint`);
  next()
}

moduloe.exports =  { logger }