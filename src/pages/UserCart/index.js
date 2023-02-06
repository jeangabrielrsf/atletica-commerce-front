import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar";

export default function UserCart() {
	const { cart, setCart } = useContext(CartContext);
	console.log(cart);
	return (
		<>
			<NavigationBar />
			<Title>Aqui está seu carrinho</Title>
			<Wrapper>
				{cart?.map((item, index) => {
					return <CartItem product={item} key={index} />;
				})}
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	width: 60%;
	margin: 0px auto;
	border: 1px solid yellow;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 100px auto 20px auto;
	color: yellow;
	font-size: 30px;
	font-weight: 700;
`;
