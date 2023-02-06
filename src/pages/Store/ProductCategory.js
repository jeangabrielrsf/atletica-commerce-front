import styled from "styled-components";

export default function ProductCategory({ category }) {
	return <Wrapper>{category.name}</Wrapper>;
}

const Wrapper = styled.div`
	width: 80%;
	background-color: #ffff00;
	border: 1px solid blue;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px auto;
	color: black;

	&:hover {
		cursor: pointer;
	}
`;
