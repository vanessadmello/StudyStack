import { Request, Response } from "express";
import {
	createCard,
	deleteCard,
	getCardsByDeck,
	getCardsByDeckAndSpacedRep,
	updateCard,
} from "../services/card.service";
import logger from "../utils/logger";

async function createCardHandler(req: Request, res: Response) {
	try {
		const card = await createCard(req.body);
		return res.status(200).send(card);
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function getCardsHandler(req: Request, res: Response) {
	try {
		if (req.body.spaced) {
			var deck = req.body.deck || "all";
			const cards = await getCardsByDeckAndSpacedRep(
				req.body.username,
				deck
			);
			return res.status(200).send(cards);
		} else {
			var deck = req.body.deck || "all";
			const cards = await getCardsByDeck(req.body.username, deck);
			return res.status(200).send(cards);
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function updateCardHandler(req: Request, res: Response) {
	try {
		await updateCard(req.params.id, req.body);
		res.status(200).send({
			id: req.params.id,
			message: "Card Updated Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function deleteCardHandler(req: Request, res: Response) {
	try {
		await deleteCard(req.params.id, req.body);
		res.status(200).send({
			id: req.params.id,
			message: "Card Deleted Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

export {
	createCardHandler,
	getCardsHandler,
	updateCardHandler,
	deleteCardHandler,
};
