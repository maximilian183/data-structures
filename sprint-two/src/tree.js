var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {    // Complexity: O(1)
  this.children.push(Tree(value));
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
