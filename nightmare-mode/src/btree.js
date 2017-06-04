var BTree = function () {
  /*
      BTree is dependent on node array of 'max_degree'.
      When 'insert' number or when 'remove' number, 'balance' the whole tree again.
      While 'balance', 'split' node accordingly to fit 'max_degree'.

      Check if tree 'contains' number, returns number || null.  Implementation is to 'traverse' down the tree.
      Can change degree by 'setDegree' at any time, and balance the whole tree again
  */

  /*
      [5     ,     49]
[1,3,4]     [6,7,8]       [54,55,67]
[2]

  */

  /*
    BTree()
      this.max_degree = ___
      this.value = {}
      this.children = [BTree(), BTree(), BTree()]

      -insert(number)
      -remove(number)
      -balance()        //dependency:  this.max_degree
        -split()        //dependency:  this.max_degree
      -contains(number)
      -traverse(callback)
      -setDegree (max_degree)

[,3,4]
2
0,1,

  */


  this.max_degree = 3;
  this.value = [];
  this.children = [];
  this.parent = null;
};

BTree.prototype.insert = function(number){
  // Find the node where number belongs
  // Insert the number in the relevent node
  // Check if current node is at max_length
        // Balance current node if true
        // Recursively call on this.parent

  for (var i = 0; i < this.value.length; i++) {
    if( )
  }

  this.balance();
};

BTree.prototype.remove = function(number){

};

BTree.prototype.balance = function(){

};

BTree.prototype.contains = function(number){

};

BTree.prototype.traverse = function(cb){

};