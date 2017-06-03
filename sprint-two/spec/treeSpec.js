describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('Modified Test: should have methods named "addChild", "removeFromParent", "traverse" and "contains"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
  });

  it('Added Test: should have properties named "value", "children", and "parent"', function() {

    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
    expect(tree.hasOwnProperty('children')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('Added Test: should allow child node to refer to parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(6)
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('Added Test: should contain only numbers', function() {
    tree.addChild('hello');
    tree.addChild(6);
    expect(tree.contains('hello')).to.equal(false);
  });

   it('Added Test: should return parent node value when disassociated from child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6)
    var testChild = tree.children[0].children[0]

    expect(testChild.removeFromParent()).to.equal(5);
  });

   it('Added Test: should return "no parent found" if run on first node in tree', function() {
    expect(tree.removeFromParent()).to.equal("no parent found");
  });

  it('Added Test: should allow child node to disassociate parent reference', function() {
    tree.addChild(5);
    tree.children[0].addChild(6)
    var testChild = tree.children[0].children[0]
    testChild.removeFromParent();
    expect(testChild.parent).to.equal(null);
  });

  it('Added Test: should dissasociate child reference in parent as well', function() {
    tree.addChild(5);
    tree.children[0].addChild(6)
    var testChild = tree.children[0].children[0]
    testChild.removeFromParent();
    expect(tree.children[0].children[0]).to.equal(undefined);
  });

  it('Added Test: should only dissasociate specific child reference in parent ', function() {
    tree.addChild(5);
    tree.children[0].addChild(6)
    tree.children[0].addChild(7)
    var testChild = tree.children[0].children[0]
    testChild.removeFromParent();
    expect(tree.children[0].children[0].value).to.equal(7);
  });

  it('Added Test: should correctly execute a callback on every value in the tree', function() {
    tree = Tree(3);
    tree.addChild(4)
    tree.addChild(5)
    tree.children[0].addChild(6)
    var arr = []
    tree.traverse(function (value) { arr.push(value); });
    expect(arr[0]).to.equal(3);
    expect(arr[1]).to.equal(4);
    expect(arr[2]).to.equal(6);
    expect(arr[3]).to.equal(5);

  });

});
