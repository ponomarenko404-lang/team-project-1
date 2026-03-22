import { getCategories, getProducts } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';

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

refs.categories.addEventListener('click', handleClickCategoryBtn);
function handleClickCategoryBtn(event) {
  const currentElement = event.target.closest('.categories__btn');
  console.log(currentElement);
  if (!currentElement) return;
  const category = currentElement.textContent;
  console.log(category);
  const activeBtn = event.currentTarget.querySelector(
    '.categories__btn--active'
  );
  if (activeBtn) {
    activeBtn.classList.remove('categories__btn--active');
  }
  currentElement.classList.add('categories__btn--active');
  if (category === 'All') {
  }
}
