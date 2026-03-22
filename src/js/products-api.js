import axios from 'axios';

const productsApi = axios.create({ baseURL: 'https://dummyjson.com/products' });

async function getCategories() {
  const res = await productsApi.get('/category-list');
  return res.data;
}

async function getProducts(currentPage = 1, limit = 12) {
  const skip = (currentPage - 1) * limit;
  const params = { limit, skip };
  const res = await productsApi.get('', params);
  return res.data;
}

async function getProductsByCategory(category, currentPage = 1, limit = 12) {
  const skip = (currentPage - 1) * limit;
  const params = { limit, skip, category };
  const res = await productsApi.get('', params);
  return res.data;
}

// функція для отримання категорії
export { getCategories, getProducts };
