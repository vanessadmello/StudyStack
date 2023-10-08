import pino, { Logger } from "pino";

const logger: Logger = pino({
	transport: {
		target: "pino-pretty",
		colorize: true,
	},
	base: {
		pid: false,
	},
});

export default logger;
