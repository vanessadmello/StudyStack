import axios from "axios";

export const getDecksByUser = (userId) => {
	userId = "652bfb0aba2c6991d9965578";
	return axios.get("http://127.0.0.1:5000/api/deck/user", {
		params: {
			id: userId,
		},
	});
};

export const getDecksById = (deckId) => {
	deckId = "655c70f9c69f7bb6dff496b4";
	return axios.get("http://127.0.0.1:5000/api/deck/", {
		params: {
			id: deckId,
		},
	});
};

export const createDeck = (userId) => {
	userId = "652bfb0aba2c6991d9965578";
	return axios.post("http://127.0.0.1:5000/api/deck", {
		userId: userId,
		name: "CPP",
	});
};

export const updateDeck = (deckId, data) => {
	deckId = "656b2f2b17cf98614ef8b594";
	data = {
		name: "C++",
	};
	return axios.put("http://127.0.0.1:5000/api/deck", data, {
		params: { id: deckId },
	});
};

export const deleteDeck = (deckId) => {
	deckId = "656b2f2b17cf98614ef8b594";
	return axios.delete("http://127.0.0.1:5000/api/deck", {
		params: { id: deckId },
	});
};
