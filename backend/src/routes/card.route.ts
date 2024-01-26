import { Express } from "express";
import {
	createCardHandler,
	deleteCardHandler,
	updateCardHandler,
	getCardsByDeckHandler,
	getCardsByUserHandler,
	updateAnswerCardHandler,
} from "../controllers/card.controller";
import { bulkCardValidator, cardValidator, idCardValidator } from "../validators/card.validator";

function cardRoutes(app: Express) {
	app.post("/api/card", cardValidator, createCardHandler);
	app.post("/api/bulkcard", bulkCardValidator, updateAnswerCardHandler);
	app.get("/api/card/deck?:id", idCardValidator, getCardsByDeckHandler);
	app.get("/api/card/user?:id", idCardValidator, getCardsByUserHandler);
	app.put("/api/card?:id", idCardValidator, updateCardHandler);
	app.delete("/api/card?:id", idCardValidator, deleteCardHandler);
}

export default cardRoutes;
