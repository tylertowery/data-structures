var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var n = Object.keys(storage).length;
    storage[n] = value;
  };

  someInstance.pop = function() {
    var last = Object.keys(storage).length - 1;
    var deleted = storage[last];
    delete storage[last];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
