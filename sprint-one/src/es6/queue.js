class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    var n = this.count;
    this.count++;
    this.storage[n] = value;
  }

  dequeue() {
    var oldest = Object.keys(this.storage).slice(0, 1);
    var dequeued = this.storage[oldest];
    delete this.storage[oldest];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
