import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
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
}

function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>

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
    </li>
  `;
}

renderCartContents();
