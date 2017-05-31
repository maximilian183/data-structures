var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {                 //o(1)
  // retrieving index using hash function
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index);

  if (bucket === undefined) {
    // if bucket is undefined, create a bucket with a k,v tuple
    this._storage.set(index, [[k,v]]);
  } else {
    var overWrite = false; // keeps track of overwriting tuples
    for ( var i = 0; i < bucket.length; i++ ) {
      // loop through bucket, checking for tuple key, the k value
      // if k is found, overwrite current v with passed v
      if ( bucket[i][0] === k ) {
        bucket[i][1] = v;
        overWrite = true;
      }
    }
    if(!overWrite) {
      // if no overwriting was tracked, push tuple
      this._storage.get(index).push([k,v]);
    }

  }
};

HashTable.prototype.retrieve = function(k) {                   //o(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index);
  if (bucket) {
    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[i][0] === k ) {
        // if tuple is found, return value
        return bucket[i][1];
      } // else do nothing
    }
  } else {
    return 'Index Not Found';
  }
};

HashTable.prototype.remove = function(k) {                      //o(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index);
  if (bucket) {
    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[i][0] === k ) {
        // if tuple is found, splice it out of bucket
        bucket.splice(i,1);
      } // else do nothing
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
