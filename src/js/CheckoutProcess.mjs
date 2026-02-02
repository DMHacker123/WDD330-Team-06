export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.tax = 0;
    this.shipping = 0;
    this.orderTotal = 0;
  }

  getCartItems() {
    const cart = localStorage.getItem(this.key);
    this.list = cart ? JSON.parse(cart) : [];
  }

  cleanPrice(value) {
    if (typeof value === "string") {
      return Number(value.replace("$", ""));
    }
    return Number(value);
  }

  calculateItemSubTotal() {
    this.itemTotal = this.list.reduce((sum, item) => {
      const price = this.cleanPrice(item.price ?? item.Price);
      return sum + price * item.quantity;
    }, 0);

    document.querySelector(
      `${this.outputSelector} #subtotal`
    ).innerText = `$${this.itemTotal.toFixed(2)}`;
  }

  calculateOrderTotal() {
    this.tax = this.itemTotal * 0.06;
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.orderTotal = this.itemTotal + this.tax + this.shipping;
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    document.querySelector(`${this.outputSelector} #tax`).innerText =
      `$${this.tax.toFixed(2)}`;
    document.querySelector(`${this.outputSelector} #shipping`).innerText =
      `$${this.shipping.toFixed(2)}`;
    document.querySelector(`${this.outputSelector} #orderTotal`).innerText =
      `$${this.orderTotal.toFixed(2)}`;
  }
}

