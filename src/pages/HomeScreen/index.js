import NavigationBar from "../../components/NavigationBar";
import capa from "../../assets/images/capa-atletica.png";
import styled from "styled-components";
import BannerImage from "../../components/BannerImage";

export default function HomeScreen() {
	return (
		<Wrapper>
			<NavigationBar />
			<BannerImage src={capa} alt="foto de capa" />
			<Boxes>
				<div>Seleção 1</div>

				<div>Seleção 2</div>

				<div>Seleção 3</div>

				<div>Seleção 4</div>
			</Boxes>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Boxes = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	> div {
		width: 100px;
		height: 100px;
		border: 1px solid black;
	}
`;
