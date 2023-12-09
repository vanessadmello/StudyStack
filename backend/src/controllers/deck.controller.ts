import { Request, Response } from "express";
import {
	createDeck,
	getDeckById,
	getDecksByUser,
	updateDeck,
	deleteDeck,
} from "../services/deck.service";
import logger from "../utils/logger";
import { getCardsByDeckNoPopulate } from "../services/card.service";
import { Deck } from "../types";

// TODO: Unique Decks Only
async function createDeckHandler(req: Request, res: Response) {
	try {
		const deck = await createDeck(req.body);
		return res.status(200).send(deck);
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function getDecksByUserHandler(req: Request, res: Response) {
	try {
		const deckInfo: Deck[] = await getDecksByUser(req.query.id as string);
		var decks: Deck[] = [];
		for (var i = 0; i < deckInfo.length; i++) {
			const cards = await getCardsByDeckNoPopulate(deckInfo[i]._id || "");
			var deck: Deck = {
				name: deckInfo[i].name,
				userId: deckInfo[i].userId,
				_id: deckInfo[i]._id,
				reviewed: cards.reviewed.length,
				toReview: cards.toReview.length,
			};
			decks.push(deck);
		}
		if (decks) {
			res.status(200).send(decks);
		} else {
			res.status(404).send({ message: "Deck Not Found" });
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function getDeckByIdHandler(req: Request, res: Response) {
	try {
		const id = req.query.id as string;
		const deck = await getDeckById(id);
		if (deck) {
			res.status(200).send(deck);
		} else {
			res.status(404).send({ message: "Deck Not Found" });
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function updateDeckHandler(req: Request, res: Response) {
	try {
		await updateDeck(req.query.id as string, req.body);
		res.status(200).send({
			id: req.query.id,
			message: "Deck Updated Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function deleteDeckHandler(req: Request, res: Response) {
	try {
		await deleteDeck(req.query.id as string);
		res.status(200).send({
			id: req.query.id,
			message: "Deck Deleted Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

export {
	createDeckHandler,
	getDecksByUserHandler,
	getDeckByIdHandler,
	updateDeckHandler,
	deleteDeckHandler,
};
