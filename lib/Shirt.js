function Shirt (color, size, price) {
  this.color = color;
  this.price = price;
  this.size = size;
}
Shirt.prototype.display = function () {
  return `${this.color} shirt (${this.size}) $${this.price}x1`;
}
module.exports = Shirt;
