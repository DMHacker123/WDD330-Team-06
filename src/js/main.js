import { loadHeaderFooter } from "./utils.mjs";

async function initSearch() {
  const form = document.querySelector("#search-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = document.querySelector("#search-input").value.trim();
    if (!search) return;

    window.location.href = `/product_listing/index.html?search=${search}`;
  });
}

await loadHeaderFooter();
initSearch();
