<<<<<<< HEAD
import { getParam } from "./utils.mjs";
=======
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
>>>>>>> 58b8d33 ("Add item to cart broken")
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productID = getParam("product");

<<<<<<< HEAD
const product = new ProductDetails(productID, dataSource);
product.init();
=======
function addProductToCart(product) {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
  let cart = getLocalStorage("so-cart");

  if (!Array.isArray(cart)) {
    cart = [];
  }

  cart.push(product);
  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
>>>>>>> 58b8d33 ("Add item to cart broken")
