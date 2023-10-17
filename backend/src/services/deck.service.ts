import DeckModel from "../models/deck.model";
import { Deck } from "../types";
import logger from "../utils/logger";

const createDeck = async (deckInput: Deck) => {
	try {
		return await DeckModel.create<Deck>(deckInput);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const getDeckById = async (id: string) => {
	try {
		return await DeckModel.findOne({ _id: id });
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const getDecksByUser = async (userId: string) => {
	try {
		return await DeckModel.find({ userId: userId });
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const updateDeck = async (id: string, deckInput: Deck) => {
	try {
		await DeckModel.findOneAndUpdate({ _id: id }, deckInput);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const deleteDeck = async (id: string) => {
	try {
		await DeckModel.findOneAndRemove({ _id: id });
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

// TODO Delete Decks By User

export { createDeck, getDeckById, getDecksByUser, updateDeck, deleteDeck };
