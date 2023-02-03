import { useContext, useEffect, useState } from "react";
import BannerImage from "../../components/BannerImage";
import NavigationBar from "../../components/NavigationBar";
import TeamsContext from "../../contexts/TeamsContext";
import styled from "styled-components";
import TeamsCategoriesContext from "../../contexts/TeamsCategoriesContext";
import TeamBox from "./TeamBox";

export default function Teams() {
	const { teams } = useContext(TeamsContext);
	const { teamsCategories } = useContext(TeamsCategoriesContext);
	console.log(teams);
	console.log(teamsCategories);
	return (
		<>
			<NavigationBar />
			<BannerImage />
			<Container>
				{teamsCategories?.map((category, index) => {
					return <TeamBox category={category} key={index} />;
				})}
			</Container>
		</>
	);
}

const Container = styled.div`
	border: 1px solid black;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: auto;
`;
