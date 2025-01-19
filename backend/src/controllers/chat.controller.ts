import { Request, Response } from "express";
import logger from "../utils/logger";
import { createChat, getChatById } from "../services/chat.service";

async function createChatHandler(req: Request, res: Response) {
	try {
		const chat = await createChat(req.body);
		if (chat) {
			return res.status(200).send(chat);
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send({ message: e.message });
	}
}

async function getChatByIdHandler(req: Request, res: Response) {
	try {
		const id = req.query.id as string;
		const chat = await getChatById(id)
		if (chat) {
			res.status(200).send(chat);
		} else {
			res.status(404).send({ message: "Chat Not Found" });
		}
	} catch (e: any) {
		logger.error(e.message);
		res.status(409).send({ message: e.message });
	}
}

async function messageChatHandler(req: Request, res: Response) {
	try {
		const io = req.app.get('socketio');
		const message = req.body;
		if (!message) throw new Error('Message creation failed');
		// emit event to send message data to connected clients
		io.emit('chat message', message);

		res.status(201).send(message);
	} catch (e: any) {
		logger.error(e.message)
		res.status(500).send({ message: e.message });
	}
}

export { createChatHandler, getChatByIdHandler, messageChatHandler };
