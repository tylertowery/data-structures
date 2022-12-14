var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var n = count;
    count++;
    storage[n] = value;
  };

  someInstance.dequeue = function() {
    var oldest = Object.keys(storage).slice(0, 1);
    var dequeued = storage[oldest];
    delete storage[oldest];
    return dequeued;
  };
  // keys = [1, 2, 3, 4]

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
