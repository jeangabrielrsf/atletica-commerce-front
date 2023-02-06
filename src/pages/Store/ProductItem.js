import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";

export default function ProductItem({ product }) {
	const [counter, setCounter] = useState(0);
	const { cart, setCart } = useContext(CartContext);

	function handleCounter(operation) {
		if (operation === "minus" && counter > 0) {
			setCounter(counter - 1);
		}
		if (operation === "plus") {
			setCounter(counter + 1);
		}
	}

	function addToCart() {
		if (counter > 0) {
			const newCart = [...cart, product];
			setCart(newCart);
		}
	}
	return (
		<Wrapper>
			<img src={product.pictureURL} alt="product" />
			<div className="background">
				<ProdNamePrice>
					<ProdName>{product.name}</ProdName>
					<ProdPrice>
						R$ {(product.price / 100).toFixed(2).replace(".", ",")}
					</ProdPrice>
				</ProdNamePrice>
				<ProdStock>Peças disponíveis: {product.stockQtd}</ProdStock>
				<Icons>
					<div>
						<AiOutlineMinus onClick={() => handleCounter("minus")} />
						<Counter>{counter}</Counter>
						<AiOutlinePlus onClick={() => handleCounter("plus")} />
					</div>
					<div className="buy" onClick={addToCart}>
						<BsCartPlus />
					</div>
				</Icons>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: #000099;
	border: 1px solid gray;
	width: 30%;
	height: 50%;
	border-radius: 10px;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	margin: 0px 20px 20px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 250px;
		height: 200px;
		border-radius: 5px;
		object-fit: contain;
	}

	.background {
		background: yellow;
		width: 100%;
		border-radius: 0px 0px 10px 10px;
		padding: 10px;
	}
`;

const ProdNamePrice = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const ProdName = styled.div`
	font-size: 16px;
	font-weight: 700;
`;

const ProdPrice = styled.div`
	font-size: 16px;
	font-weight: 700;
`;
const ProdStock = styled.div`
	font-size: 12px;
	font-weight: 400;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 0px auto;
	font-size: 16px;
	> div:nth-child(1) {
		display: flex;

		> :nth-child(2n + 1) {
			font-size: 25px;
		}
		> :nth-child(2n + 1):hover {
			cursor: pointer;
		}
	}

	.buy {
		font-size: 25px;
	}
	.buy:hover {
		cursor: pointer;
	}
`;

const Counter = styled.div`
	background: white;
	border-radius: 25%;
	width: 25px;
	height: 25px;
	border: 1px solid gray;
	display: flex;
	justify-content: center;
	align-items: center;
`;
