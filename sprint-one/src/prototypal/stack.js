var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var n = Object.keys(this.storage).length;
  this.storage[n] = value;
};

stackMethods.pop = function() {
  var last = Object.keys(this.storage).length - 1;
  var popped = this.storage[last];
  delete this.storage[last];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
