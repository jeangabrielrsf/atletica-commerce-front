import styled from "styled-components";
import logo from "../../assets/images/atletica-logo.jpg";
import {
	BiHomeAlt,
	BiFootball,
	BiStore,
	BiCalendarEvent,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import NavigationButton from "./NavigationButton";
import { IconContext } from "react-icons";

export default function NavigationBar() {
	return (
		<Wrapper>
			<IconContext.Provider value={{ size: "20px" }}>
				<img src={logo} alt="atletica logo" />
				<StyledLink to="/home">
					<NavigationButton>
						<BiHomeAlt />
						<div>Página Inicial</div>
					</NavigationButton>
				</StyledLink>

				<StyledLink to="/times">
					<NavigationButton>
						<BiFootball />
						<div>Times</div>
					</NavigationButton>
				</StyledLink>

				<StyledLink to="/loja">
					<NavigationButton>
						<BiStore />
						<div>Loja</div>
					</NavigationButton>
				</StyledLink>

				<StyledLink to="/eventos">
					<NavigationButton>
						<BiCalendarEvent />
						<div>Eventos</div>
					</NavigationButton>
				</StyledLink>
			</IconContext.Provider>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 80px;
	width: 100%;
	background-color: #000099;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	img {
		object-fit: cover;
		height: 70px;
		width: 70px;
		border-radius: 50%;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	&:visited,
	&:active {
		text-decoration: none;
	}
`;
