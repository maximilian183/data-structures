var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var tailNode = Node(value);
    if ( list.head === null && list.tail === null) {
      list.head = tailNode;
    } else {
      list.tail.next = tailNode;
    }
    list.tail = tailNode;
  };

  list.removeHead = function() {
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

  list.contains = function(target) {

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
























// {
//   data: 1, next: {
//     data: 2, next: {
//       data: 4, next: null;
//     }
// }}

// addToTail("usa");

// var list = {

//   '5': {node.value = 'world', node.next = "forthe"},
//   'forthe': {node.value = 'world', node.next = "insert"},
//   '3': {node.value = 'information', node.next = 'usa'},
//   '1': {node.value = 'hi', node.next = "2"},               // head
//   '2': {node.value = 'world', node.next = "5"},
//    'usa': {node.value = 'usa', node.next = null},          //tail
//   'insert': {node.value = 'world', node.next = "3"},
//   head = '1',
//   tail = 'usa'
// }


//   if (list[x][node][next] === null){

//   }


// {
//   data: 1, next: {
//     data: 2, next:{
//       data: 17, next:{
//        data: 4, next: null;
//     }
//    }
//  }
// }