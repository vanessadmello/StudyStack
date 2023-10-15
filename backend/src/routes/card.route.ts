import { Express } from "express";
import {
	createCardHandler,
	deleteCardHandler,
	updateCardHandler,
	getCardsByDeckHandler,
	getCardsByUserHandler,
} from "../controllers/card.controller";
import {
	cardValidator,
	idCardValidator,
	getCardValidator,
	cardsByUserValidator,
} from "../validators/card.validator";

function cardRoutes(app: Express) {
	app.post("/api/card", cardValidator, createCardHandler);
	app.get("/api/card", getCardValidator, getCardsByDeckHandler);
	app.get("/api/cards", cardsByUserValidator, getCardsByUserHandler);
	app.put("/api/card?:id", idCardValidator, updateCardHandler);
	app.delete("/api/card?:id", idCardValidator, deleteCardHandler);
}

export default cardRoutes;
