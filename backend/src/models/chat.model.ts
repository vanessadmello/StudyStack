import mongoose, { Schema } from "mongoose";
import { Chat } from "../types";

const chatSchema = new mongoose.Schema(
	{
        name: {
            type: String,
            required: true,
        },
		adminId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		userIds: {
			type: [Schema.Types.ObjectId],
			required: true,
		},
		messages: {
			type: [
				{
					content: String,
					userId: Schema.Types.ObjectId,
					timestamp: Date,
				},
			],
		},
	},
	{
		timestamps: true,
	}
);

const ChatModel = mongoose.model<Chat>("Chat", chatSchema);

export default ChatModel;
