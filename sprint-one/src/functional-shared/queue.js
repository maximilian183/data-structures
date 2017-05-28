var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {};

queueMethods.size = function() {
  return this.front - this.back;
};

queueMethods.enqueue = function(value) {
  this.storage[this.front] = value;
  this.front++;
};

queueMethods.dequeue = function() {
  if ((this.front - this.back) > 0) {
    var val = this.storage[this.back];
    delete this.storage[this.back];
    this.back++;
    return val;
  }
};


