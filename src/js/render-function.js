import refs from "./refs"

    
function renderCategory(category) {
  return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`
}
function renderCategories(categories) {
    const markup = categories.map(renderCategory).join('')
    refs.categories.innerHTML = markup;
};


// краще в кінці
export { renderCategory, renderCategories };