function Cart () {
  this.contents = [];
}
Cart.prototype.add = function (item) {
  this.contents.push(item);
}
Cart.prototype.display = function () {
  if (this.contents.length === 0) {
    return 'nothing in cart';
  } else {
    return `Total:
******
${this.contents.map(shirt => shirt.display()).join("\n")}
******
$${this.contents.reduce((total, shirt) => total + shirt.price, 0)}`;
  }
}
module.exports = Cart;
