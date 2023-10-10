import { Express, Response, Request } from "express";

function checkRoutes(app: Express) {
	app.get("/api/check", (req: Request, res: Response) => {
		res.status(200).send("FlashCard App is Running");
	});
}

export default checkRoutes;
