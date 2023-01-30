import styled from "styled-components";

export default function NavigationButton({ children }) {
	return <Button>{children}</Button>;
}

const Button = styled.button`
	width: 100%;
	height: 100px;
	border: none;
	background-color: transparent;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 20px;
	color: yellow;
`;
