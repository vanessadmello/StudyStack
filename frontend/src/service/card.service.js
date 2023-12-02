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

export const createCard = (userId, deckId, data) => {
	userId = "652bfb0aba2c6991d9965578";
	return axios.post("http://127.0.0.1:5000/api/card", {
		userId: userId,
		question: "who died on 20th November",
		deck: [deckId],
		answer: "Prerna Sharma",
	});
};

export const updateCard = (cardId, data) => {
	return axios.put("http://127.0.0.1:5000/api/card", data, {
		params: { id: cardId },
	});
};

export const deleteCard = (cardId) => {
	cardId = "652c0ac08d23a576a53d9e81";
	return axios.delete("http://127.0.0.1:5000/api/card", {
		params: { id: cardId },
	});
};
