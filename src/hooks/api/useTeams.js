import useAsync from "../useAsync";
import * as teamsApi from "../../services/teamsApi";
export default function useTeams() {
	const {
		data: teamsList,
		loading: teamsLoading,
		error: teamsError,
		act: getTeams,
	} = useAsync(() => teamsApi.getTeams());

	return {
		teamsList,
		teamsLoading,
		teamsError,
		getTeams,
	};
}
