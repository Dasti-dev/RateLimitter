class TokenBucket {
    constructor(capacity, rate) {
      this.capacity = capacity;
      this.rate = rate;
      this.tokens = capacity;
      this.lastRefillTime = Date.now();
    }
  
    getToken() {
      const now = Date.now();
      const elapsed = now - this.lastRefillTime;
      if (elapsed > 0) {
        this.tokens = Math.min(this.capacity, this.tokens + elapsed * (this.rate / 1000));
        this.lastRefillTime = now;
      }
      if (this.tokens >= 1) {
        this.tokens--;
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  module.exports = TokenBucket;
  