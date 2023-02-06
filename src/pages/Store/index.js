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
					<ul>
						{categories?.map((item, index) => {
							return (
								<li>
									<ProductCategory category={item} key={index} />
								</li>
							);
						})}
					</ul>
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
	display: flex;
	padding: 10px;
`;

const ProductsBoxes = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	margin-left: 100px;
`;

const Categories = styled.div`
	border: 1px solid yellow;
	background: #000099;
	width: 15%;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		color: white;
		font-size: 20px;
	}

	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0px auto;
	}

	ul:hover li {
		opacity: 0.5;
	}

	ul li:hover {
		opacity: 1;
	}
`;
