var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.size = function() {
  return this.front - this.back;
};

Queue.prototype.enqueue = function( value ) {
  this.storage [ this.front ] = value;
  this.front++;
};

Queue.prototype.dequeue = function() {
  if ( (this.front - this.back) > 0){
    var val = this.storage [ this.back ];
    delete this.storage [ this.back ];
    this.back ++;
    return val;
  }
};