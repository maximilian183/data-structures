var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  newTree.insert = function(number){                // O(log n)
    // check if bigger or smaller and check if left or right is full, insert into left or right
    // call insert on left or right
    if ( typeof number !== 'number' ) {
      return "Only Accepts Numbers";
    }

    if ( number < newTree.value ) {
      if ( newTree.left !== null ) {
        newTree.left.insert(number);
      } else {
        newTree.left = BinarySearchTree(number);
      }
    } else if ( number > newTree.value ) {
      if ( newTree.right !== null) {
        newTree.right.insert(number);
      } else {
        newTree.right = BinarySearchTree(number);
      }
    }
  };

  newTree.contains = function(number){              //O(log n)
    if ( newTree.value === number ) {
      return true;
    } else if ( number < newTree.value && newTree.left !== null ) {
      return newTree.left.contains(number);
    } else if  ( number > newTree.value && newTree.right !== null ) {
      return newTree.right.contains(number);
    } else {
      return false;
    }
  };

  newTree.depthFirstLog = function(cb){               // o(n)
    cb(newTree.value);

    if ( newTree.left !== null ) {
      newTree.left.depthFirstLog(cb);
    } else if ( newTree.right !== null) {
      newTree.right.depthFirstLog(cb);
    }
  };

  return newTree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
