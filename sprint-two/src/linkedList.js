var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {    // O(1) time complexity
    var tailNode = Node(value);
    if ( list.head === null && list.tail === null) {
      list.head = tailNode;
    } else {
      list.tail.next = tailNode;
    }
    list.tail = tailNode;
  };

  list.removeHead = function() {    // O(1) time complexity
    // store head node
    // let head refer to the next node
    // return stored node
    if(list.head === null) {
      return null;
    }

    var formerHead = list.head;
    list.head = formerHead.next;
    return formerHead.value;

  };

  list.contains = function(target) {    // O(n) time complexity
    var currentNode = list.head;
    while (currentNode) {
      if(currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
