//doubly linked list
var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {    // O(1) time complexity
    if (typeof value === 'number') {
      var tailNode = Node(value);
      if ( list.head === null && list.tail === null) {
        list.head = tailNode;
      } else {
        list.tail.next = tailNode;
        tailNode.previous = list.tail;
      }
      list.tail = tailNode;
    }
  };

  list.addToHead = function(value) {
    if (typeof value === 'number') {
      var headNode = Node(value);

      if ( list.head === null && list.tail === null) {
        list.tail = headNode;
      } else {
        list.head.previous = headNode;
        headNode.next = list.head;
      }
      list.head = headNode;
    }
  };

  list.removeTail = function() {
    if ( list.tail === null ) {
      return null;
    }

    var formerTail = list.tail;
    list.tail = formerTail.previous;
    return formerTail.value;
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
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
