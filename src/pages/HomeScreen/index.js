import NavigationBar from "../../components/NavigationBar";
import capa from "../../assets/images/capa-atletica.png";
import styled from "styled-components";
import BannerImage from "../../components/BannerImage";

export default function HomeScreen() {
	return (
		<Wrapper>
			<NavigationBar />
			<BannerImage src={capa} alt="foto de capa" />
			<Text>Em breve mais informações sobre a atlética!</Text>
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

const Text = styled.div`
	font-weight: 700;
	font-size: 30px;
	color: yellow;
`;
