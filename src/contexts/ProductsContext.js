import { createContext, useEffect, useState } from "react";
import useProducts from "../hooks/api/useProducts";

const ProductsContext = createContext();
export default ProductsContext;

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const { productsList } = useProducts();
	useEffect(() => {
		setProducts(productsList);
	}, [productsList]);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
}
