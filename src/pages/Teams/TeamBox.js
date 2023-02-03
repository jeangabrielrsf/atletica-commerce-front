import styled from "styled-components";

export default function TeamBox({ category }) {
	return <Box>{category.category}</Box>;
}

const Box = styled.div`
	border: 1px solid red;
	background-color: #e2e216;
	width: 300px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;
