import { Express } from "express";
import {
	createUserHandler,
	deleteUserHandler,
	loginUserHandler,
	updateUserPasswordHandler,
} from "../controllers/user.controller";
import {
	userValidator,
	deleteUserValidator,
	updateUserValidator,
} from "../validators/user.validator";

function userRoutes(app: Express) {
	app.post("/api/user", userValidator, createUserHandler);
	app.post("/api/login/user", userValidator, loginUserHandler);
	app.put("/api/user?:id", updateUserValidator, updateUserPasswordHandler);
	app.delete("/api/user?:id", deleteUserValidator, deleteUserHandler);
}

export default userRoutes;
