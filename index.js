import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const n=a.create({baseURL:"https://dummyjson.com/products"});async function o(){return(await n.get("/category-list")).data}async function i(t=1,e=12){const r=(t-1)*e,s={limit:e,skip:r};return(await n.get("",s)).data}const c={categories:document.querySelector(".categories"),products:document.querySelector(".products")};function u(t){return`
    <li class="categories__item">
      <button class="categories__btn ${t==="All"?"categories__btn--active":""}" type="button">${t}</button>
    </li>
 `}function l(t){const e=t.map(u).join("");c.categories.innerHTML=e}function d(t){return`
    <li class="products__item" data-id="${t.id}">
      <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
      <p class="products__title">${t.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand: ${t.brand}</span></p>
      <p class="products__category">Category: ${t.category}</p>
      <p class="products__price">Price:  ${t.price}$</p>
    </li>
  `}function g(t){const e=t.map(d).join("");c.products.insertAdjacentHTML("beforeend",e)}async function p(){await _(),await m()}async function _(){const t=await o();t.unshift("All"),l(t)}async function m(){const t=await i();g(t.products)}p();c.categories.addEventListener("click",b);function b(t){const e=t.target.closest(".categories__btn");if(console.log(e),!e)return;const r=e.textContent;console.log(r);const s=t.currentTarget.querySelector(".categories__btn--active");s&&s.classList.remove("categories__btn--active"),e.classList.add("categories__btn--active")}
//# sourceMappingURL=index.js.map
