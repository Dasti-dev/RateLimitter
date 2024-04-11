# Rate Limiter Middleware for Express

This middleware function provides rate limiting capabilities for Node.js Express servers using either Leaky Bucket or Token Bucket algorithms.

## Installation

```bash
npm install rate-limiter

```
// Example middleware usage with Leaky Bucket algorithm
app.use('/api', rateLimiter({ algorithm: 'leaky', capacity: 10, rate: 1 }));

// Example middleware usage with Token Bucket algorithm
app.use('/api2', rateLimiter({ algorithm: 'token', capacity: 10, rate: 1 }));
```