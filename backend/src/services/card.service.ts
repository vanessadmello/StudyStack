import mongoose from "mongoose";
import CardModel from "../models/card.model";
import { Card } from "../types";
import logger from "../utils/logger";

const createCard = async (cardInput: Card) => {
	try {
		cardInput.spacedAt = new Date();
		cardInput.spacedRep = 1;
		if (cardInput.deck == null) {
			cardInput.deck = ["undefined"];
		}
		return await CardModel.create(cardInput);
	} catch (e: any) {
		logger.error(e.message);
	}
};

const getCardsByDeck = async (username: string, deck: string) => {
	try {
		var cards: Array<Card>;
		if (deck === "all") {
			cards = await CardModel.find({ username: username });
		} else {
			cards = await CardModel.find({
				username: username,
				deck: deck,
			});
		}
		return cards;
	} catch (e: any) {
		logger.error(e.message);
	}
};

const getCardsByDeckAndSpacedRep = async (username: string, deck: string) => {
	try {
		var cards: Array<Card>;
		if (deck === "all") {
			cards = await CardModel.find({ username: username });
		} else {
			cards = await CardModel.find({
				username: username,
				deck: deck,
			});
		}
		var cardsReturn: Array<Card> = [];

		if (cards) {
			cards.forEach((card) => {
				var currentDate = new Date();
				const spacedRep = card.spacedRep;
				const spacedDate = new Date(
					card.spacedAt.getTime() + spacedRep * 24 * 60 * 60 * 1000
				);
				if (spacedDate <= currentDate) {
					cardsReturn.push(card);
				}
			});
		}
		return cardsReturn;
	} catch (e: any) {
		logger.error(e.message);
	}
};

const updateCard = async (id: string, cardInput: Card) => {
	try {
		await CardModel.findOneAndUpdate({ _id: id }, cardInput);
	} catch (e: any) {
		logger.error(e.message);
	}
};

const deleteCard = async (id: string, cardInput: Card) => {
	try {
		await CardModel.findOneAndRemove({ _id: id });
	} catch (e: any) {
		logger.error(e.message);
	}
};

export {
	createCard,
	getCardsByDeck,
	getCardsByDeckAndSpacedRep,
	updateCard,
	deleteCard,
};
