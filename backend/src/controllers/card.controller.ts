import { Request, Response } from "express";
import {
	createCard,
	deleteCard,
	getCardsByUser,
	getCardsByDeck,
	updateCard,
	cardUpdateQuiz,
} from "../services/card.service";
import logger from "../utils/logger";
import { fetchProgress, updateProgressInUser } from "../services/user.service";
import { Answer } from "../types";

async function createCardHandler(req: Request, res: Response) {
	try {
		const card = await createCard(req.body);
		return res.status(200).send(card);
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

// TODO getCardsByUserHandler Limit By Range
async function getCardsByUserHandler(req: Request, res: Response) {
	try {
		const cards = await getCardsByUser(req.query.id as string);
		return res.status(200).send(cards);
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}
// TODO getCardsByDeckHandler Limit By Range
async function getCardsByDeckHandler(req: Request, res: Response) {
	try {
		const cards = await getCardsByDeck(req.query.id as string);
		return res.status(200).send(cards);
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function updateCardHandler(req: Request, res: Response) {
	try {
		await updateCard(req.query.id as string, req.body);
		res.status(200).send({
			id: req.query.id,
			message: "Card Updated Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function updateAnswerCardHandler(req: Request, res: Response) {
	try {
		var answer: Answer = {
			correct: req.body.correct,
			incorrect: req.body.incorrect,
		};
		await cardUpdateQuiz(answer);
		const date = new Date();
		date.setHours(0, 0, 0, 0);
		answer = {
			timestamp: date,
			correct: req.body.correct.length,
			incorrect: req.body.incorrect.length,
		};
		await updateProgressInUser(req.body.userId, answer);
		res.status(200).send({
			ids: req.body.correct.push(...req.body.incorrect),
			message: "Cards Updated Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function deleteCardHandler(req: Request, res: Response) {
	try {
		await deleteCard(req.query.id as string, req.body);
		res.status(200).send({
			id: req.query.id,
			message: "Card Deleted Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

export {
	createCardHandler,
	getCardsByUserHandler,
	getCardsByDeckHandler,
	updateCardHandler,
	deleteCardHandler,
	updateAnswerCardHandler,
};
