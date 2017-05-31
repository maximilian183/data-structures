describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('Added Test: should not contain strings', function() {
    binarySearchTree.insert('hello');
    expect(binarySearchTree.contains('hello')).to.equal(false);
  });

  it('Added Test: should not contain objects', function() {
    binarySearchTree.insert({});
    expect(binarySearchTree.contains({})).to.equal(false);
  });

  it('Added Test: should not contain arrays', function() {
    binarySearchTree.insert([]);
    expect(binarySearchTree.contains([])).to.equal(false);
  });

  it('Added Test: should not contain booleans', function() {
    binarySearchTree.insert(false);
    expect(binarySearchTree.contains(false)).to.equal(false);
  });

  it('Added Test: should only accept numbers', function() {
    expect(binarySearchTree.insert('one')).to.equal('Only Accepts Numbers');
  });
});
