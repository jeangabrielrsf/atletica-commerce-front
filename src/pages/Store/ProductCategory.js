import styled from "styled-components";

export default function ProductCategory({ category }) {
	return <Wrapper>{category.name}</Wrapper>;
}

const Wrapper = styled.div`
	width: 100px;
	border: 1px solid blue;
`;
