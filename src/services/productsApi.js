import api from "./api";

export async function getProducts() {
	const response = await api.get("/store/products");

	return response.data;
}

export async function getProductsCategories() {
	const response = await api.get("/store/categories");

	return response.data;
}
