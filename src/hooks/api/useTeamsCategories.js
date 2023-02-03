import useAsync from "../useAsync";

import * as teamsApi from "../../services/teamsApi";

export default function useTeamsCategories() {
	const {
		data: teamsCategoriesList,
		loading: teamsCategoriesLoading,
		error: teamsCategoriesError,
		act: getTeamsCategories,
	} = useAsync(() => teamsApi.getTeamsCategories());

	return {
		teamsCategoriesList,
		teamsCategoriesLoading,
		teamsCategoriesError,
		getTeamsCategories,
	};
}
