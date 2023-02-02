import BannerImage from "../../components/BannerImage";
import NavigationBar from "../../components/NavigationBar";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import ProductsCategoriesContext from "../../contexts/ProductsCategoriesContext";
import ProductCategory from "./ProductCategory";

export default function Store() {
	const { products } = useContext(ProductsContext);
	const { categories } = useContext(ProductsCategoriesContext);
	console.log(products);
	console.log(categories);

	return (
		<>
			<NavigationBar />
			<BannerImage />
			<ProductsContainer>
				<Categories>
					<p>Categorias</p>
					{categories?.map((item, index) => {
						return <ProductCategory category={item} key={index} />;
					})}
				</Categories>
				<ProductsBoxes>
					{products?.map((item, index) => {
						return <ProductItem product={item} key={index} />;
					})}
				</ProductsBoxes>
			</ProductsContainer>
		</>
	);
}

const ProductsContainer = styled.div`
	border: 3px solid black;
	width: 100%;
	display: flex;
	padding: 10px;
`;

const ProductsBoxes = styled.div`
	border: 1px solid red;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	margin-left: 100px;
`;

const Categories = styled.div`
	border: 1px solid yellow;
	width: 15%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
