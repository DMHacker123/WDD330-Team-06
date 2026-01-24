import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

await loadHeaderFooter();

const searchTerm = getParam("search");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");

const productList = new ProductList(listElement);

if (searchTerm) {
  const products = await dataSource.searchProducts(searchTerm);
  console.log("SEARCH RESULTS:", products);
  productList.renderList(products);
}
