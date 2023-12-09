import UserModel from "../models/user.model";
import { User } from "../types";
import logger from "../utils/logger";
import bcrypt from "bcrypt";
import config from "config";
import { omit } from "lodash";
import { deleteCardByUser } from "./card.service";
import { deleteDeckByUser } from "./deck.service";

const registerUser = async (userInput: User) => {
	try {
		const hash = bcrypt.hashSync(
			userInput.password,
			config.get<number>("salt")
		);
		userInput.password = hash;
		const user = await UserModel.create<User>(userInput);
		return omit(user.toJSON(), "password");
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const validateUser = async (username: string, password: string) => {
	try {
		const user = await UserModel.findOne({ username: username });
		if (user && bcrypt.compareSync(password, user.password)) {
			return omit(user.toJSON(), "password");
		}
		return null;
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const updateUserPassword = async (id: string, password: string) => {
	try {
		const hash = bcrypt.hashSync(password, config.get<number>("salt"));
		await UserModel.findOneAndUpdate({ _id: id }, { password: hash });
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const deleteUser = async (id: string) => {
	try {
		await UserModel.findOneAndRemove({ _id: id });
		await deleteCardByUser(id);
		await deleteDeckByUser(id);
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

export { registerUser, updateUserPassword, deleteUser, validateUser };
