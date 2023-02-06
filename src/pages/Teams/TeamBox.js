import styled from "styled-components";

export default function TeamBox({ category }) {
	return <Box>{category.category}</Box>;
}

const Box = styled.div`
	border-radius: 5px;
	background: #000099;
	width: 300px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	color: yellow;
	font-size: 20px;
`;
