import mongoose, { Schema } from "mongoose";
import { User } from "../types";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		progress: {
			type: [
				{
					timestamp: Date,
					correct: Number,
					incorrect: Number,
				},
			],
		},
	},
	{
		timestamps: true,
	}
);

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
