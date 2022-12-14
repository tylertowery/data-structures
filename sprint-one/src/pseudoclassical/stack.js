var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var n = Object.keys(this.storage).length;
  this.storage[n] = value;
};

Stack.prototype.pop = function () {
  var last = Object.keys(this.storage).length - 1;
  var popped = this.storage[last];
  delete this.storage[last];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


