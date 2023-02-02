import styled from "styled-components";

export default function ProductItem({ product }) {
	return <Wrapper>{product.name}</Wrapper>;
}

const Wrapper = styled.div`
	width: 60px;
	height: 60px;
	border: 1px solid green;
	margin: 0px 10px;
`;
