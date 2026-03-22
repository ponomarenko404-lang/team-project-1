import axios from "axios";

const productsApi = axios.create({
    baseURL: 'https://dummyjson.com/products',
});

// функція для отримання категорії
export { getCategories, };
async function getCategories() {
    const res = await productsApi.get('/category-list');
    return res.data
};


