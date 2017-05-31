// Instantiate a new graph
var Graph = function() {
  this.storage = {};
                    /* {storage: {
                          1: {5: true, 7: true},
                          5: {1: true},
                          7: {},
                        }}
                    */
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {                  // Time complexity: O(1)
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {                 // Time complexity: O(1)
  if (this.storage.hasOwnProperty(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {                 // Time complexity: O(n)
  for (var x in this.storage[node]) {
    delete this.storage[x][node];
  }

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {                    // Time complexity: O(1)
  if (this.storage[fromNode].hasOwnProperty(toNode) && this.storage[toNode].hasOwnProperty(fromNode)){
    return true;
  }else{
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {                    // Time complexity: O(1)
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {                 // Time complexity: O(1)
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {                              // Time complexity: O(n)
  for(var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


