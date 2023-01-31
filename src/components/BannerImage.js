import styled from "styled-components";
import bannerImage from "../assets/images/capa-atletica.png";
export default function BannerImage() {
	return <Banner src={bannerImage} alt="banner image" />;
}

const Banner = styled.img`
	object-fit: contain;
	width: 100%;
	height: 300px;
	margin-top: 80px;
	background: yellow;
`;
