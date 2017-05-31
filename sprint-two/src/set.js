var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {           //Time Compleity: O(1)
  if (this.contains(item)) {
    //do nothing
  } else {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {           //Time Complexity: O(n)
  for (var i = 0; i < this._storage.length; i++) {
    if( this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {           //Time Complexity: O(n)
  for (var i = 0; i < this._storage.length; i++) {
    if ( this._storage[i] === item) {
      this._storage.splice(i,1);
    }
  }
  return this._storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
