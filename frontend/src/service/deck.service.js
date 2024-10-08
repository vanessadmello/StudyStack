import axios from "axios";
const API_URL =
	process.env.REACT_APP_ENV === "PROD"
		? process.env.REACT_APP_PROD
		: process.env.REACT_APP_DEV;

export const getDecksByUser = (userId) => {
	return axios.get(API_URL + "deck/user", {
		params: {
			id: userId,
		},
	});
};

export const getDeckById = (deckId) => {
	return axios.get(API_URL + "deck/", {
		params: {
			id: deckId,
		},
	});
};

export const createDeck = (userId, data) => {
	data = { ...data, userId: userId };
	return axios.post(API_URL + "deck", data);
};

export const updateDeck = (deckId, data) => {
	return axios.put(API_URL + "deck", data, {
		params: { id: deckId },
	});
};

export const deleteDeck = (deckId) => {
	return axios.delete(API_URL + "deck", {
		params: { id: deckId },
	});
};
