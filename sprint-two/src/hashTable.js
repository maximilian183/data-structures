var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {                 //o(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k,v]]);
  } else {
    var arr =  this._storage.get(index);
    var overWrite = false;
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i][0] === k ) {
        arr[i][1] = v;
        overWrite = true;
      }
    }
    if(!overWrite) {
      this._storage.get(index).push([k,v]);
    }

  }
};

HashTable.prototype.retrieve = function(k) {                   //o(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr =  this._storage.get(index);
  if (arr) {
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i][0] === k ) {
        return arr[i][1];
      } // else do nothing
    }
  } else {
    return 'Index Not Found';
  }
};

HashTable.prototype.remove = function(k) {                      //o(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr =  this._storage.get(index);
  if (arr) {
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i][0] === k ) {
        arr.splice(i,1);
      } // else do nothing
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
