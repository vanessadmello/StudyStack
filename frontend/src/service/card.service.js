import axios from "axios";

export const getCardsByUser = (userId) => {
	userId = "652bfb0aba2c6991d9965578";
	return axios.get("http://127.0.0.1:5000/api/card/user", {
		params: {
			id: userId,
		},
	});
};

export const getCardsByDeck = (deckId) => {
	return axios.get("http://127.0.0.1:5000/api/card/deck", {
		params: {
			id: deckId,
		},
	});
};

export const createCard = (data) => {
	data = { ...data, userId: "652bfb0aba2c6991d9965578" };
	return axios.post("http://127.0.0.1:5000/api/card", data);
};

export const updateCard = (cardId, data) => {
	return axios.put("http://127.0.0.1:5000/api/card", data, {
		params: { id: cardId },
	});
};

export const deleteCard = (cardId) => {
	return axios.delete("http://127.0.0.1:5000/api/card", {
		params: { id: cardId },
	});
};
