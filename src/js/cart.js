import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".checkout-summary");
order.init();

// Add event listeners to fire calculateOrderTotal when the user changes the zip code
const zipEl = document.querySelector("#zip");
if (zipEl) zipEl.addEventListener("blur", order.calculateOrderTotal.bind(order));

// listening for click on the button
const submitEl = document.querySelector("#checkoutSubmit");
if (submitEl) submitEl.addEventListener("click", (e) => {
  e.preventDefault();
  order.checkout();
});