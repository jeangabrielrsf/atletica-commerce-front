import { createContext, useEffect, useState } from "react";
import useTeamsCategories from "../hooks/api/useTeamsCategories";

const TeamsCategoriesContext = createContext();
export default TeamsCategoriesContext;

export function TeamsCategoriesProvider({ children }) {
	const [teamsCategories, setTeamsCategories] = useState([]);
	const { teamsCategoriesList } = useTeamsCategories();

	useEffect(() => {
		setTeamsCategories(teamsCategoriesList);
	}, [teamsCategoriesList]);

	return (
		<TeamsCategoriesContext.Provider
			value={{ teamsCategories, setTeamsCategories }}
		>
			{children}
		</TeamsCategoriesContext.Provider>
	);
}
