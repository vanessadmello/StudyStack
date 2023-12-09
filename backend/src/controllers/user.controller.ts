import { Request, Response } from "express";
import {
	registerUser,
	deleteUser,
	updateUserPassword,
	validateUser,
} from "../services/user.service";
import logger from "../utils/logger";
import _ from "lodash";
import { createDeck } from "../services/deck.service";
import { Deck } from "../types";

async function createUserHandler(req: Request, res: Response) {
	try {
		const user = await registerUser(req.body);
		if (user) {
			const deck: Deck = {
				userId: user?._id,
				name: "default",
			};
			await createDeck(deck);
			return res.status(200).send(user);
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send({ message: e.message });
	}
}

async function loginUserHandler(req: Request, res: Response) {
	try {
		const user = await validateUser(req.body.username, req.body.password);
		if (user) {
			res.status(200).send(user);
		} else {
			res.status(404).send({ message: "Username/Password Incorrect" });
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send({ message: e.message });
	}
}

async function updateUserPasswordHandler(req: Request, res: Response) {
	try {
		await updateUserPassword(req.query.id as string, req.body.password);
		res.status(200).send({
			id: req.query.id,
			message: "Password Updated Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

async function deleteUserHandler(req: Request, res: Response) {
	try {
		await deleteUser(req.query.id as string);
		res.status(200).send({
			id: req.query.id,
			message: "User Deleted Successfully",
		});
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send(e.message);
	}
}

export {
	createUserHandler,
	loginUserHandler,
	updateUserPasswordHandler,
	deleteUserHandler,
};
