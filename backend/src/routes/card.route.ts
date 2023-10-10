import { Express } from "express";
import {
	createCardHandler,
	deleteCardHandler,
	getCardsHandler,
	updateCardHandler,
} from "../controllers/card.controller";

function cardRoutes(app: Express) {
	app.post("/api/card", createCardHandler);
	app.get("/api/cards", getCardsHandler);
	app.put("/api/card/:id", updateCardHandler);
	app.delete("/api/card/:id", deleteCardHandler);
	
}

export default cardRoutes;
