import { Express } from "express";
import {
	createUserHandler,
	deleteUserHandler,
	fetchProgressHandler,
	loginUserHandler,
	updateUserPasswordHandler,
} from "../controllers/user.controller";
import {
	userValidator,
	idUserValidator,
	updateUserValidator,
} from "../validators/user.validator";

function userRoutes(app: Express) {
	app.post("/api/user", userValidator, createUserHandler);
	app.post("/api/login/user", userValidator, loginUserHandler);
	app.put("/api/user?:id", updateUserValidator, updateUserPasswordHandler);
	app.delete("/api/user?:id", idUserValidator, deleteUserHandler);
	app.get("/api/user/progress?:id", idUserValidator, fetchProgressHandler);
}

export default userRoutes;
