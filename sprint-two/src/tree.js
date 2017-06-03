var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.parent = null;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {    // Complexity: O(1)
  if (typeof value === 'number'){
    var child = Tree(value);
    child.parent = this;
    this.children.push(child);
  }else{
    return false;
  }
};

treeMethods.removeFromParent = function () {

  if (this.parent !== null) {
    var parentNode = this.parent;
    this.parent = null;

    for (var i = 0; i < parentNode.children.length; i++) {
      if (parentNode.children[i] === this) {
        // this comparison works because they are referencing the same object in memory
        parentNode.children.splice(i,1);
      }
    }
    return parentNode.value;
  } else {
    return 'no parent found';
  }
};

treeMethods.traverse = function (cb) {
  cb(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};

treeMethods.contains = function(target) {    // Complexity: O(n^n)
  var check = false;

  var searchTree = function(tree) {
    if ( tree.value === target ) {
      check = true;
      return check;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        searchTree(tree.children[i]);
      }
    }
  };

  searchTree(this);
  return check;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
