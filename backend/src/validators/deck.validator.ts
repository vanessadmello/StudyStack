import { NextFunction, Request, Response } from "express";
import { body, validationResult, param, query } from "express-validator";

const deckValidator = [
	body("userId")
		.exists()
		.withMessage("User Id is Required")
		.isString()
		.withMessage("User Id should be string"),
	body("name")
		.exists()
		.withMessage("Name is Required")
		.isString()
		.withMessage("name should be string"),
	body("color")
		.exists()
		.withMessage("Color is Required")
		.isString()
		.withMessage("Color should be string"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

const deckByIdValidator = [
	query("id")
		.exists()
		.withMessage("Deck Id is Required")
		.isString()
		.withMessage("Deck Id should be string"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

const getDecksByUserValidator = [
	body("userId")
		.exists()
		.withMessage("User Id is Required")
		.isString()
		.withMessage("User Id should be string"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

export { deckValidator, deckByIdValidator, getDecksByUserValidator };
