import { convertToJson } from './utils.mjs';

const baseURL = import.meta.env.VITE_SERVER_URL;

export default class ProductData {
  constructor() {}

  async getData(category) {
    const response = await fetch(
      `${baseURL}products/search/${category}`
    );
    const data = await convertToJson(response);
    return data.Result;
  }

async searchProducts(searchTerm) {
  const response = await fetch(`${baseURL}products/search/${searchTerm}`);
  const data = await convertToJson(response);
  console.log("SEARCH API DATA:", data);
  return data.Result; // <-- likely wrong
}
  async findProductById(id) {
    const response = await fetch(
      `${baseURL}product/${id}`
    );
    const data = await convertToJson(response);
    return data.Result;
  }

} 