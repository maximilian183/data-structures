var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v, currentBalance) {                 //o(1)
  // retrieving index using hash function
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index);

  if (bucket === undefined) {
    // if bucket is undefined, create a bucket with a k,v tuple
    this._storage.set(index, [[k,v]]);
    this._count++;
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
      this._count++;
    }

    if(!currentBalance){
      this.balance();
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
        this._count--;
      } // else do nothing
    }
  }

  this.balance();
};

HashTable.prototype.balance = function() {
  // check existing hashtable size
  //if size >= 75%
    // increase size of limitedArray by double
    // rehash kv pairs into new hashtable
  //if size <= 25%
    // decrease size by half
    // rehash kv pairs into new hashtable
  var oldLimit = this._limit;
  var hashRatio = this._count/this._limit;
  var doIt = false;
  if (hashRatio > .75){
    this._limit *= 2;
    doIt = true;
  } else if(hashRatio < .25) {
    this._limit = this._limit / 2;
    doIt = true;
  }

  if(doIt){
    var oldArr = this._storage;
    this._storage = LimitedArray(this._limit);
    this._count = 0;
    for ( var i = 0; i < oldLimit; i++) {
      var bucket = oldArr.get(i);
      if (bucket !== undefined) {
        for ( var j = 0; j < bucket.length; j++) {
          this.insert( bucket[j][0], bucket[j][1], true);
        }
      }
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
































