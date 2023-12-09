import axios from "axios";

const API_URL = process.env.REACT_APP_DEV;

export const getCardsByUser = (userId) => {
	return axios.get(API_URL + "card/user", {
		params: {
			id: userId,
		},
	});
};

export const getCardsByDeck = (deckId) => {
	return axios.get(API_URL + "card/deck", {
		params: {
			id: deckId,
		},
	});
};

export const createCard = (data) => {
	return axios.post(API_URL + "card", data);
};

export const bulkUpdateCardQuix = (data) => {
	return axios.post(API_URL + "bulkcard", data);
};

export const updateCard = (cardId, data) => {
	return axios.put(API_URL + "card", data, {
		params: { id: cardId },
	});
};

export const deleteCard = (cardId) => {
	return axios.delete(API_URL + "card", {
		params: { id: cardId },
	});
};
