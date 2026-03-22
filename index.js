import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";const s=c.create({baseURL:"https://dummyjson.com/products"});async function o(){return(await s.get("/category-list")).data}async function i(t=1,e=12){const a=(t-1)*e,n={limit:e,skip:a};return(await s.get("",n)).data}const r={categories:document.querySelector(".categories"),products:document.querySelector(".products")};function u(t){return`
    <li class="categories__item">
      <button class="categories__btn" type="button">${t}</button>
    </li>
 `}function d(t){const e=t.map(u).join("");r.categories.innerHTML=e}function p(t){return`
    <li class="products__item" data-id="${t.id}">
      <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
      <p class="products__title">${t.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand: ${t.brand}</span></p>
      <p class="products__category">Category: ${t.category}</p>
      <p class="products__price">Price:  ${t.price}$</p>
    </li>
  `}function l(t){const e=t.map(p).join("");r.products.insertAdjacentHTML("beforeend",e)}async function g(){await m(),await _()}async function m(){const t=await o();t.unshift("All"),d(t)}async function _(){const t=await i();l(t.products)}g();
//# sourceMappingURL=index.js.map
