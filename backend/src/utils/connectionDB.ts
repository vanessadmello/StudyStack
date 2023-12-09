import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectionDb = async () => {
	const production: boolean = config.get<boolean>("production");
	const dbURL: string = production
		? config.get<string>("dbURLProd")
		: config.get<string>("dbURLDev");
	try {
		await mongoose.connect(dbURL);
		logger.info("Connected to MongoDB Successfully");
	} catch (e: any) {
		logger.error(`Failed to Connect to MongoDB: ${e.message}`);
	}
};

export default connectionDb;
