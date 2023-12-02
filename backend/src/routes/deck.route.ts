import { Express } from "express";
import {
	createDeckHandler,
	updateDeckHandler,
	getDeckByIdHandler,
	getDecksByUserHandler,
	deleteDeckHandler,
} from "../controllers/deck.controller";
import {
	deckValidator,
	deckByIdValidator,
} from "../validators/deck.validator";

function deckRoutes(app: Express) {
	app.post("/api/deck", deckValidator, createDeckHandler);
	app.get("/api/deck?:id", deckByIdValidator, getDeckByIdHandler);
	app.get("/api/deck/user/:id?", deckByIdValidator, getDecksByUserHandler);
	app.put("/api/deck?:id", deckByIdValidator, updateDeckHandler);
	app.delete("/api/deck?:id", deckByIdValidator, deleteDeckHandler);
}

export default deckRoutes;
