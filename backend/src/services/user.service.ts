import UserModel from "../models/user.model";
import { Answer, User } from "../types";
import logger from "../utils/logger";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { omit } from "lodash";
import { deleteCardByUser } from "./card.service";
import { deleteDeckByUser } from "./deck.service";

dotenv.config();

const registerUser = async (userInput: User) => {
	try {
		const salt: number = Number(process.env.SALT);
		const hash = bcrypt.hashSync(userInput.password, salt);
		userInput.password = hash;
		const user = await UserModel.create<User>(userInput);
		return omit(user.toJSON(), "password");
	} catch (e: any) {
		logger.error(e.message);
		if (e.code === 11000) {
			throw new Error("Username Exists. Please try another");
		} else {
			throw new Error("Unable to register the user");
		}
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
		const salt: number = Number(process.env.SALT);
		const hash = bcrypt.hashSync(password, salt);
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
			correct: number[];
			incorrect: number[];
		} = {
			correct: [0, 0, 0, 0, 0, 0, 0],
			incorrect: [0, 0, 0, 0, 0, 0, 0],
		};
		if (user) {
			var now = new Date();
			var month =
				(now.getUTCMonth() + 1 < 10 ? `0` : ``) +
				(now.getUTCMonth() + 1);
			var day = (now.getUTCDate() < 10 ? `0` : ``) + now.getUTCDate();

			var today = new Date(
				`${now.getUTCFullYear()}-${month}-${day}T00:00:00.000+00:00`
			);

			const progress = user.progress.filter(
				(value) =>
					value.timestamp != null &&
					value.timestamp?.getTime() >=
						today.getTime() - 7 * 24 * 60 * 60 * 1000
			);

			for (let j = 0, i = 6; j < progress.length && i >= 0; i--) {
				if (
					progress[j].timestamp?.getTime() ==
					today.getTime() - i * 24 * 60 * 60 * 1000
				) {
					progressData.correct[i] = progress[j].correct;
					progressData.incorrect[i] = progress[j++].incorrect;
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
