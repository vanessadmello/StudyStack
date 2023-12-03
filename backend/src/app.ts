import express, { Express, Request, Response } from "express";
import connectionDb from "./utils/connectionDB";
import logger from "./utils/logger";
import config from "config";
import cardRoutes from "./routes/card.route";
import userRoutes from "./routes/user.route";
import deckRoutes from "./routes/deck.route";

const app: Express = express();
app.use(express.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
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

const port: number = config.get<number>("port");
const hostName: string = config.get<string>("hostName");

app.get("/api", (req: Request, res: Response) => {
	res.status(200).send({ message: "FlashCard App is Running" });
});

app.listen(port, hostName, async () => {
	logger.info(`App on: http://${hostName}:${port}`);
	await connectionDb();
});
