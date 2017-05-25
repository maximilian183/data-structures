var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackSize = 0;

  return someInstance;

};

var stackMethods = {};

stackMethods.size = function() {
  return this.stackSize;
};

stackMethods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

stackMethods.pop = function() {
  if (this.stackSize > 0){
    var poppedVal = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return poppedVal;
  }
};

