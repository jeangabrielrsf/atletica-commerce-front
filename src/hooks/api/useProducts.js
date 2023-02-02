import useAsync from "../useAsync";

import * as productsApi from "../../services/productsApi";

export default function useProducts() {
	const {
		data: productsList,
		loading: productsLoading,
		error: productsError,
		act: getProducts,
	} = useAsync(() => productsApi.getProducts());

	return {
		productsList,
		productsLoading,
		productsError,
		getProducts,
	};
}
