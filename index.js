import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const r=o.create({baseURL:"https://dummyjson.com/products"});async function s(){return(await r.get("/category-list")).data}const n={categories:document.querySelector(".categories")};function a(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`}function i(t){const e=t.map(a).join("");n.categories.innerHTML=e}async function c(){const t=await s();t.unshift("All"),i(t)}c();
//# sourceMappingURL=index.js.map
