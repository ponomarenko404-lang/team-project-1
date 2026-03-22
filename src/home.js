import { getCategories, getProducts } from "./js/products-api";
import { renderCategories, renderProducts } from "./js/render-function";

//Логіка сторінки Home
async function initHomepage() {
    await renderHtmlCategories();
    await renderHtmlProducts();

}

async function renderHtmlCategories() {
    const categories = await getCategories();
    categories.unshift(`All`);
    renderCategories(categories);
}

async function renderHtmlProducts() {
    const products = await getProducts();
    renderProducts(products.products);
}

initHomepage();