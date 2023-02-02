import useAsync from "../useAsync";

import * as productsApi from "../../services/productsApi";

export default function useProductsCategories() {
	const {
		data: categoriesList,
		loading: categoriesLoading,
		error: categoriesError,
		act: getProductsCategories,
	} = useAsync(() => productsApi.getProductsCategories());

	return {
		categoriesList,
		categoriesLoading,
		categoriesError,
		getProductsCategories,
	};
}
