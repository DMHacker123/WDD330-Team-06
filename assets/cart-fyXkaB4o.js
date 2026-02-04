import{g as t}from"./utils-DsyKi0Bb.js";function e(){const r=t("so-cart")||[];if(r.length===0){document.querySelector(".product-list").innerHTML="<p>Your cart is empty.</p>";return}const a=r.map(c=>o(c));document.querySelector(".product-list").innerHTML=a.join("")}function o(r){return`
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${r.Image}" alt="${r.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${r.Name}</h2>
      </a>
      <p class="cart-card__color">${r.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${r.FinalPrice}</p>
    </li>
  `}e();
