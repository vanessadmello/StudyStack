import express, { Express, Request, Response } from "express";
import connectionDb from "./utils/connectionDB";
import logger from "./utils/logger";
import cardRoutes from "./routes/card.route";
import userRoutes from "./routes/user.route";
import deckRoutes from "./routes/deck.route";
import * as dotenv from "dotenv";
dotenv.config();

const app: Express = express();
app.use(express.json());

const environment: string = process.env.ENV as string;
const hostWebApp: string = (environment === "PROD"
		? process.env.HOSTWEBAPPPROD
		: process.env.HOSTWEBAPPDEV
) as string;

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", hostWebApp);
	res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,POST,PUT");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	logger.info(`${req.method} ${req.url}`);
	next();
});
cardRoutes(app);
userRoutes(app);
deckRoutes(app);

const port: number = process.env.PORT as unknown as number;

app.get("/api", (req: Request, res: Response) => {
	res.status(200).send({ message: "FlashCard App is Running" });
});

app.listen(port, async () => {
	logger.info(`Server Flashcard started on port ${port}`);
	await connectionDb();
});
