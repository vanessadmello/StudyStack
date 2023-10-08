import mongoose from "mongoose";
import config from "config";

const connectionDb = async () => {
	const dbURL: string = config.get<string>("dbURL");
	try {
		await mongoose.connect(dbURL);
		console.log("Connected to MongoDB Successfully");
	} catch (e: any) {
		console.log("Failed to Connect to MongoDB ", e.message);
	}
};

export default connectionDb;
