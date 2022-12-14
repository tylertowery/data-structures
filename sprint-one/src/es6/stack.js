class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var n = Object.keys(this.storage).length;
    this.storage[n] = value;
  }

  pop() {
    var last = Object.keys(this.storage).length - 1;
    var popped = this.storage[last];
    delete this.storage[last];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}