'use strict';

const requireAuthentication = (req, res, next) => {
  console.log(`Authenticate request...`);
  next();
};

module.exports = requireAuthentication;
