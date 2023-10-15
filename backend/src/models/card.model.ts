import mongoose, { Schema } from "mongoose";
import { Card } from "../types";

const cardSchema = new mongoose.Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: String,
			required: true,
		},
		deck: {
			type: [Schema.Types.ObjectId],
			ref: "Deck",
			required: true,
		},
		spacedAt: {
			type: Date,
			required: true,
		},
		spacedRep: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const CardModel = mongoose.model<Card>("Card", cardSchema);

export default CardModel;
