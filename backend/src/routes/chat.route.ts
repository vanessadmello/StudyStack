import { Express } from "express";
import {
	createChatHandler,
	getChatByIdHandler,
	messageChatHandler,
} from "../controllers/chat.controller";

function chatRoutes(app: Express) {
	app.post("/api/chat", createChatHandler);
	app.post("/api/chat/user", );
	// app.put("/api/user?:id");
	app.get("/api/chat?:id", getChatByIdHandler);

	app.post('/api/messages', messageChatHandler);
	// app.delete("/api/chat?:id");
}

export default chatRoutes;
