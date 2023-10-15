import { Express } from "express";
import {
	createUserHandler,
	deleteUserHandler,
	getUserHandler,
	updateUserPasswordHandler,
} from "../controllers/user.controller";
import {
	userValidator,
	deleteUserValidator,
	updateUserValidator,
} from "../validators/user.validator";

function userRoutes(app: Express) {
	app.post("/api/user", userValidator, createUserHandler);
	app.get("/api/user", userValidator, getUserHandler);
	app.put("/api/user?:id", updateUserValidator, updateUserPasswordHandler);
	app.delete("/api/user?:id", deleteUserValidator, deleteUserHandler);
}

export default userRoutes;
