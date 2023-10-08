import express, { Express } from "express";
import connectionDb from "./utils/connectionDB";
import logger from "./utils/logger";
import config from "config";

const app: Express = express();
app.use(express.json());

const port: number = config.get<number>("port");

app.listen(port, async () => {
	logger.info(`App listening at ${port}`);
	await connectionDb();
});
