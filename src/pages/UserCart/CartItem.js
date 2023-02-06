import styled from "styled-components";
import { BsCartDash } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
export default function CartItem({ product }) {
	const { cart, setCart } = useContext(CartContext);
	console.log(cart?.map((item) => product.name === item.name));
	return (
		<>
			<Item>
				<img src={product.pictureURL} />
				<Container>
					<ProductInfo>
						<h3>{product.name}</h3>
						<h4>R$ {(product.price / 100).toFixed(2).replace(".", ",")}</h4>
					</ProductInfo>
					<Description>{product.description}</Description>
					<Quantity>Quantidade em estoque: {product.stockQtd}</Quantity>
				</Container>
				<Icons>
					<AiOutlineMinus />
					{cart?.filter((item) => product.name === item.name).length}
					<AiOutlinePlus />
				</Icons>
			</Item>
		</>
	);
}

const Item = styled.div`
	padding: 10px;
	background: #f4f409;
	margin: 10px 0px;
	display: flex;
	border: 1px solid red;
	img {
		object-fit: cover;
		width: 100px;
		height: 150px;
	}
`;

const ProductInfo = styled.div`
	display: flex;
	height: 30%;
	width: 40%;
	align-items: center;
	justify-content: space-between;
	h3 {
		font-size: 18px;
	}
	h4 {
		font-size: 16px;
		font-weight: 700;
	}
`;

const Description = styled.div`
	width: 40%;
	border: 1px solid black;
`;

const Container = styled.div`
	border: 1px solid green;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 10px;
	background: #81bff9;
`;

const Quantity = styled.div``;

const Icons = styled.div``;
