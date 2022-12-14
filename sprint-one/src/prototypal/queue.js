var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var n = this.count;
  this.count++;
  this.storage[n] = value;
};

queueMethods.dequeue = function() {
  var oldest = Object.keys(this.storage).slice(0, 1);
  var dequeued = this.storage[oldest];
  delete this.storage[oldest];
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

