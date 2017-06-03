var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {           //Time Compleity: O(1)
  this._storage[item] = item;
};

setPrototype.contains = function(item) {           //Time Complexity: O(1)
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item) {           //Time Complexity: O(1)
  delete this._storage[item];
  return this._storage;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
