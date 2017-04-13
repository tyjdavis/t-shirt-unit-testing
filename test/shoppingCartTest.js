/* Shopping Cart
* the cart should display its contents:
"Total:
******
1 blue shirt (M) $19x1
2 red shirts (L) $24x2
******
                   $67"
* the user should be able to add a shirt to the cart - done up to here.....
* apply a discount of 10% after 5 shirts are added
* apply a discount of 15% after 10 shirts
* the user should be able to remove a shirt from the cart
*/

let assert = require('assert');
let Cart = require('../lib/Cart');
let Shirt = require('../lib/Shirt');

describe('ShoppingCart', function () {
  let cart;
  let item;
  beforeEach(function () {
    cart = new Cart();
    item = new Shirt('blue', 'M', 19);
  })
  describe('#add()', function () {
    it('puts one item in cart contents', function () {
      cart.add(item);
      // the item goes in cart.contents, which is an array
      assert.equal(cart.contents.length, 1);
    });
    it('can put two items in cart contents', function () {
      let item2 = new Shirt('red', 'M', 19);
      cart.add(item);
      cart.add(item2);
      assert.equal(cart.contents.length, 2);
    })
  });
  describe('#display()', function () {
    it('shows empty cart', function () {
      let result = cart.display();
      assert.equal(result, "nothing in cart");
    });
    it('shows cart with one shirt', function () {
      cart.add(item);
      let result = cart.display();
let desiredOutput = `Total:
******
blue shirt (M) $19x1
******
$19`;
      assert.equal(result, desiredOutput);
    });
    it('shows cart with two shirts', function () {
      cart.add(item);
      let item2 = new Shirt('red', 'L', 24);
      cart.add(item2);
      let result = cart.display();
let desiredOutput = `Total:
******
blue shirt (M) $19x1
red shirt (L) $24x1
******
$43`;
      assert.equal(result, desiredOutput);
    })
  })

})
