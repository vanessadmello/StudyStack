import express, { Express, Request, Response } from "express";
import connectionDb from "./utils/connectionDB";
import logger from "./utils/logger";
import config from "config";
import cardRoutes from "./routes/card.route";
import userRoutes from "./routes/user.route";
import deckRoutes from "./routes/deck.route";

const app: Express = express();
app.use(express.json());

cardRoutes(app);
userRoutes(app);
deckRoutes(app);

const port: number = config.get<number>("port");

app.get("/api", (req: Request, res: Response) => {
	res.status(200).send("FlashCard App is Running");
});

app.listen(port, async () => {
	logger.info(`App listening at ${port}`);
	await connectionDb();
});
