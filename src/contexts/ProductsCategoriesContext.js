import { createContext, useEffect, useState } from "react";
import useProductsCategories from "../hooks/api/useProductsCategories";

const ProductsCategoriesContext = createContext();
export default ProductsCategoriesContext;

export function ProductsCategoriesProvider({ children }) {
	const [categories, setCategories] = useState([]);
	const { categoriesList } = useProductsCategories();
	console.log(categoriesList);

	useEffect(() => {
		setCategories(categoriesList);
	}, [categoriesList]);

	return (
		<ProductsCategoriesContext.Provider value={{ categories, setCategories }}>
			{children}
		</ProductsCategoriesContext.Provider>
	);
}
