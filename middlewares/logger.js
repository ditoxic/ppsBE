const logger = (req, res, next) => {
    console.log(`Received ${req.method} request to ${req.path}`);
    next();
  };
  
  module.exports = logger;
  