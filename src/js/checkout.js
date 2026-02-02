import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const checkout = new CheckoutProcess("so-cart", ".order-summary");
checkout.initCheckout();

document
  .querySelector("#checkout-form")
  .addEventListener("submit", e => {
    e.preventDefault();
    alert("Order submitted (mock)");
  });

