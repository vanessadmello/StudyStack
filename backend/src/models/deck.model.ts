import mongoose, { Schema } from "mongoose";
import { Deck } from "../types";

const deckSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

const DeckModel = mongoose.model<Deck>("Deck", deckSchema);

export default DeckModel;
