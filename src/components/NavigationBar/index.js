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
				<Container>
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
				</Container>
			</IconContext.Provider>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100px;
	width: 100%;
	background-color: #000099;
	align-items: center;

	img {
		object-fit: cover;
		height: 70px;
		width: 70px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	&:visited,
	&:active {
		text-decoration: none;
	}
`;
