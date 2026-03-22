import refs from "./refs"
    
function renderCategory(category) {
  return `
    <li class="categories__item">
      <button class="categories__btn" type="button">${category}</button>
    </li>
 `
}

function renderCategories(categories) {
    const markup = categories.map(renderCategory).join('')
    refs.categories.innerHTML = markup;
};

function renderProduct(product) {
  return `
    <li class="products__item" data-id="${product.id}">
      <img class="products__image" src="${product.thumbnail}" alt="${product.title}"/>
      <p class="products__title">${product.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand: ${product.brand}</span></p>
      <p class="products__category">Category: ${product.category}</p>
      <p class="products__price">Price:  ${product.price}$</p>
    </li>
  `
}

function renderProducts(products) {
    const markup = products.map(renderProduct).join('')
    refs.products.insertAdjacentHTML('beforeend', markup);
};


// краще в кінці
export { renderCategory, renderCategories, renderProduct, renderProducts };