import styled from "styled-components";

export default function ProductItem({ product }) {
	return (
		<Wrapper>
			<img src={product.pictureURL} alt="product picture" />

			{product.name}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border: 1px solid green;
	margin: 0px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 200px;
		height: 200px;
		border-radius: 5px;
	}
`;
