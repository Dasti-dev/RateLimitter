const LeakyBucket = require('./lib/leakyBucket');
const TokenBucket = require('./lib/tokenBucket');

function rateLimiter(options) {
  let bucket;
  if (options.algorithm === 'leaky') {
    bucket = new LeakyBucket(options.capacity, options.rate);
  } else if (options.algorithm === 'token') {
    bucket = new TokenBucket(options.capacity, options.rate);
  } else {
    throw new Error('Invalid algorithm specified');
  }

  return (req, res, next) => {
    if (bucket.getToken()) {
      next();
    } else {
      res.status(429).send('Too Many Requests');
    }
  };
}

module.exports = rateLimiter;