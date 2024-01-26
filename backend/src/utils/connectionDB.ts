import mongoose from "mongoose";
import * as dotenv from "dotenv";
import logger from "./logger";
dotenv.config();

const connectionDb = async () => {
	const environment: string = process.env.ENV as string;
	const dbURL: string = (
		environment === "PROD" ? process.env.DBURLPROD : process.env.DBURLDEV
	) as string;
	try {
		await mongoose.connect(dbURL);
		logger.info("Connected to MongoDB Successfully");
	} catch (e: any) {
		logger.error(`Failed to Connect to MongoDB: ${e.message}`);
	}
};

export default connectionDb;
