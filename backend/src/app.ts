import express, { Express } from "express";
import connectionDb from "./utils/connectionDB";
import logger from "./utils/logger";
import config from "config";
import cardRoutes from "./routes/card.route";
import checkRoutes from "./routes/healthcheck.route";

const app: Express = express();
app.use(express.json());

checkRoutes(app);
cardRoutes(app);

const port: number = config.get<number>("port");

app.listen(port, async () => {
	logger.info(`App listening at ${port}`);
	await connectionDb();
});
