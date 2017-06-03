var BTree = function () {
  /*
      BTree is dependeny on node array of 'max_degree'.
      When 'insert' number or when 'remove' number, 'balance' the whole tree again.
      While 'balance', 'split' node accordingly to fit 'max_degree'.

      Check if tree 'contains' number, returns number || null.  Implementation is to 'traverse' down the tree.
      Can change degree by 'setDegree' at any time, and balance the whole tree again
  */

  /*
    BTree()
      this.max_degree = __
      -insert(number)
      -remove(number)
      -balance()        //dependency:  this.max_degree
        -split()        //dependency:  this.max_degree
      -contains(number)
      -traverse()
      -setDegree (max_degree) <- i don't think we can change the tree degree dynamically. it should be set when the tree is created, right? thats how b trees I've seen usually are implemented
  */
};