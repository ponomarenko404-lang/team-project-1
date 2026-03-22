import { getCategories } from "./js/products-api";
import { renderCategories } from "./js/render-function";

//Логіка сторінки Home
async function initHomepage() {
    const categories = await getCategories();
    categories.unshift(`All`);
    renderCategories(categories);

}
initHomepage();