const assert = require('assert');
const Shirt = require('../lib/Shirt');
//1 blue shirt (M) $19x1
describe('Shirt', function () {
  it('has a color, size, price', function () {
    let shirt = new Shirt('blue', 'M', 19);
    assert.equal(shirt.color, 'blue');
    assert.equal(shirt.size, 'M');
    assert.equal(shirt.price, 19);
  });
  describe('#display()', function () {
    it('gives a string with color, size, price', function () {
      let shirt = new Shirt('blue', 'M', 19);
      assert.equal(shirt.display(), 'blue shirt (M) $19x1');
    });
    it('gives a string with other color, size, price', function () {
      let shirt = new Shirt('red', 'M', 19);
      assert.equal(shirt.display(), 'red shirt (M) $19x1');
    })
  })
});
