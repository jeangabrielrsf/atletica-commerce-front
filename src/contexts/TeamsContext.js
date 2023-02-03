import { createContext, useEffect, useState } from "react";
import useTeams from "../hooks/api/useTeams";

const TeamsContext = createContext();
export default TeamsContext;

export function TeamsProvider({ children }) {
	const [teams, setTeams] = useState([]);
	const { teamsList } = useTeams();

	useEffect(() => {
		setTeams(teamsList);
	}, [teamsList]);

	return (
		<TeamsContext.Provider value={{ teams, setTeams }}>
			{children}
		</TeamsContext.Provider>
	);
}
