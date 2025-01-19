import ChatModel from "../models/chat.model";
import { Chat } from "../types";

import * as dotenv from "dotenv";
import logger from "../utils/logger";

dotenv.config();

const createChat = async (chatInput: Chat) => {
	try {
		return await ChatModel.create<Chat>(chatInput);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error("Unable to create new chat");
	}
};

const getChatById = async (chatId: string) => {
	try {
		return await ChatModel.findOne({ _id: chatId });
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const addUserToChat = async (chatId: string, userId: string) => {
	try {
		return await ChatModel.findOneAndUpdate(
			{ _id: chatId },
			{ $push: { userIds: userId } }
		);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const messageAdd = async (chatId: string, userId: string) => {
	try {
		return await ChatModel.findOneAndUpdate(
			{ _id: chatId },
			{ $push: { userIds: userId } }
		);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

export { createChat, getChatById, addUserToChat };
