import express, { Express } from "express";
import connectionDb from "./utils/connectionDB";

const app: Express = express();
app.use(express.json());

app.listen(5000, async () => {
	console.log("App listening at 5000");
	await connectionDb();
});
