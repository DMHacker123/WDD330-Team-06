import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
<<<<<<< HEAD
  const cartList = document.querySelector(".cart-list");

  if (!cartList) return;

  // Empty cart
  if (cartItems.length === 0) {
    cartList.innerHTML = `
      <li class="cart-empty">Your cart is empty.</li>
    `;
    return;
  }

  cartList.innerHTML = cartItems
    .map(item => cartItemTemplate(item))
    .join("");
=======

  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML =
      "<p>Your cart is empty.</p>";
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
>>>>>>> 58b8d33 ("Add item to cart broken")
}

function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>

<<<<<<< HEAD
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>

      <p class="cart-card__color">
        ${item.Colors?.[0]?.ColorName ?? ""}
      </p>

      <p class="cart-card__quantity">qty: 1</p>

      <p class="cart-card__price">
        $${item.FinalPrice}
      </p>
=======
  return newItem;
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
>>>>>>> 58b8d33 ("Add item to cart broken")
    </li>
  `;
}

renderCartContents();
