/*const scan = (barcode, items) => {
  return items.find((item) => {
    return item.barcode === barcode;
  });
}

const addToBasket = (item, basket) => {
  basket.push(item);
}

const totalPrice = (basket) => {
  return basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

const removeFromBasket = (barcode, basket) => {
  const item = scan(barcode, basket);
  const index = basket.indexOf(item);
  basket.splice(index, 1);
} */


function Till() {

  this.items =
  [{
      fruit: 'apple',
      barcode: 123,
      price: 5
  },
  {
      fruit: 'banana',
      barcode: 456,
      price: 6
  },
  {
      fruit: 'orange',
      barcode: 789,
      price: 7
  },
  {
      fruit: 'pineapple',
      barcode: 5367,
      price: 80
  },
  {
      fruit: 'kiwi',
      barcode: 765,
      price: 25
  }];

    this.basket = [];

    this.transactions = [];

};

Till.prototype.scan = function (barcode) {
  return this.items.find((item) => {
    return item.barcode === barcode
}).fruit;
};

Till.prototype.addToBasket = function (item) {
  return this.basket.push(item)
};

Till.prototype.removeFromBasket = function (barcode) {
  return this.basket.indexOf(this.barcode)

}



module.exports = {Till};

