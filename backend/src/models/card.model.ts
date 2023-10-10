import mongoose from "mongoose";
import { Card } from "../types";

const cardSchema = new mongoose.Schema(
	{
		username: {
			type: String,
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
			type: [String],
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
