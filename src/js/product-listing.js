import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

// Update page title
const title = document.querySelector(".product-list-title");
if (title && category) {
  title.textContent = `Top Products: ${category.replace("-", " ")}`;
}

// Create data source
const dataSource = new ProductData();

// Get element to render into
const listElement = document.querySelector(".product-list");

// Create product list and render
const myList = new ProductList(category, dataSource, listElement);
myList.init();

document.title = `Products | ${category.replace('-', ' ')}`;
