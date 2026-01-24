import ProductData from "./ProductData.mjs";
import { getParam, renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const products = await this.dataSource.getData(this.category);
    this.renderList(products);
  }

  renderList(productList) {
    renderListWithTemplate(
      this.productTemplate,
      this.listElement,
      productList
    );
  }

  productTemplate(product) {
    return `
      <li class="product-card">
        <a href="/product_pages/index.html?product=${product.Id}">
          <img src="${product.Images.PrimaryMedium}" alt="${product.Name}">
          <h3 class="card__brand">${product.Brand.Name}</h3>
          <h2 class="card__name">${product.Name}</h2>
          <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
      </li>
    `;
  }
}

const searchTerm = getParam("category");

/* Prevent crash if no category */
if (searchTerm) {
  const dataSource = new ProductData();
  const listElement = document.querySelector(".product-list");

  const myList = new ProductList(
    searchTerm,
    dataSource,
    listElement
  );

  myList.init();
}
