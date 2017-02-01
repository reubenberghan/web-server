'use strict';

const logger = (req, res, next) => {
  const date = new Date().toString();
  console.log(`Request ${ date } ${ req.method } ${ req.originalUrl }`);
  next();
};

module.exports = logger;
