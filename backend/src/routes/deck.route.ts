import { Express } from "express";
import {
	createDeckHandler,
	updateDeckHandler,
	getDecksByIdHandler,
	getDecksByUserHandler,
	deleteDeckHandler,
} from "../controllers/deck.controller";
import {
	deckValidator,
	getDecksByUserValidator,
	deckByIdValidator,
} from "../validators/deck.validator";

function deckRoutes(app: Express) {
	app.post("/api/deck", deckValidator, createDeckHandler);
	app.get("/api/deck?:id", deckByIdValidator, getDecksByIdHandler);
	app.get("/api/deck/user", getDecksByUserValidator, getDecksByUserHandler);
	app.put("/api/deck?:id", deckByIdValidator, updateDeckHandler);
	app.delete("/api/deck?:id", deckByIdValidator, deleteDeckHandler);
}

export default deckRoutes;
