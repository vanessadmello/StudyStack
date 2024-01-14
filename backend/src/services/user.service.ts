import UserModel from "../models/user.model";
import { Answer, User } from "../types";
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

const updateProgressInUser = async (id: string, progressData: any) => {
	try {
		var result = await UserModel.findOneAndUpdate(
			{
				_id: id,
				"progress.timestamp": {
					$eq: new Date().setHours(0, 0, 0, 0),
				},
			},
			{
				$inc: {
					"progress.$.correct": progressData.correct,
					"progress.$.incorrect": progressData.incorrect,
				},
			}
		);

		if (result == null) {
			await UserModel.findOneAndUpdate(
				{
					_id: id,
				},
				{
					$push: {
						progress: progressData,
					},
				}
			);
		}
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

const fetchProgress = async (id: string) => {
	try {
		const user = await UserModel.findOne({
			_id: id,
		});
		var progressData: {
			correct: any[];
			incorrect: any[];
		} = {
			correct: [],
			incorrect: [],
		};
		if (user) {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			const progress = user.progress.filter(
				(value) =>
					value.timestamp != null &&
					value.timestamp?.getTime() >=
						today.getTime() - 7 * 24 * 60 * 60 * 1000
			);

			for (let i = 0, j = 0; i < 7; i++) {
				if (
					j < progress.length &&
					progress[j].timestamp?.getTime() ==
						today.getTime() - i * 24 * 60 * 60 * 1000
				) {
					progressData.correct.push(progress[j].correct);
					progressData.incorrect.push(progress[j++].incorrect);
				} else {
					progressData.correct.push(0);
					progressData.incorrect.push(0);
				}
			}
		}
		progressData.correct.reverse();
		progressData.incorrect.reverse();
		return progressData;
	} catch (e: any) {
		logger.error(e.message);
		throw new Error(e);
	}
};

export {
	registerUser,
	updateUserPassword,
	deleteUser,
	validateUser,
	fetchProgress,
	updateProgressInUser,
};
