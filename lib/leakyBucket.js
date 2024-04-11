class LeakyBucket {
    constructor(capacity, rate) {
      this.capacity = capacity;
      this.rate = rate;
      this.tokens = 0;
      this.lastLeakTime = Date.now();
    }
  
    getToken() {
      const now = Date.now();
      const elapsed = now - this.lastLeakTime;
      this.tokens = Math.min(this.capacity, this.tokens + elapsed * (this.rate / 1000));
      this.lastLeakTime = now;
      return this.tokens >= 1 ? 1 : 0;
    }
  }
  
  module.exports = LeakyBucket;