import api from "./api";

export async function getTeams() {
	const response = await api.get("/teams");

	return response.data;
}

export async function getTeamsCategories() {
	const response = await api.get("/teams/categories");

	return response.data;
}
