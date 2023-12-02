import CardModel from "../models/card.model";
import { Card } from "../types";
import logger from "../utils/logger";

const createCard = async (cardInput: Card) => {
	try {
		cardInput.spacedAt = new Date();
		cardInput.spacedRep = 1;
		return await CardModel.create(cardInput);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const getCardsByUser = async (userId: string) => {
	try {
		const cards: Array<Card> = await CardModel.find({
			userId: userId,
		}).populate({ path: "deck" });
		return assignCards(cards);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const getCardsByDeck = async (deckId: string) => {
	try {
		const cards: Array<Card> = await CardModel.find({
			deck: deckId,
		}).populate({ path: "deck" });
		return assignCards(cards);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const getCardsByDeckNoPopulate = async (deckId: string) => {
	try {
		const cards: Array<Card> = await CardModel.find({
			deck: deckId,
		}).lean();
		return assignCards(cards);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const updateCard = async (id: string, cardInput: Card) => {
	try {
		await CardModel.findOneAndUpdate({ _id: id }, cardInput);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const deleteCard = async (id: string, cardInput: Card) => {
	try {
		await CardModel.findOneAndRemove({ _id: id });
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const assignCards = (cards: Array<Card>) => {
	var cardsSpaced: Array<Card> = [];
	var cardsNotSpaced: Array<Card> = [];
	if (cards) {
		cards.forEach((card) => {
			var currentDate = new Date();
			const spacedRep = card.spacedRep;
			const spacedDate = new Date(
				card.spacedAt.getTime() + spacedRep * 24 * 60 * 60 * 1000
			);
			if (spacedDate <= currentDate) {
				cardsSpaced.push(card);
			} else {
				cardsNotSpaced.push(card);
			}
		});
	}
	const cardObj = {
		spaced: cardsSpaced,
		notSpaced: cardsNotSpaced,
	};
	return cardObj;
};

// TODO Delete Cards By User

export {
	createCard,
	getCardsByDeck,
	getCardsByUser,
	updateCard,
	deleteCard,
	getCardsByDeckNoPopulate,
};
