import { NextFunction, Request, Response } from "express";
import { body, validationResult, param, query } from "express-validator";

const cardValidator = [
	body("userId")
		.exists()
		.withMessage("User Id is Required")
		.isString()
		.withMessage("User Id should be string"),
	body("question")
		.exists()
		.withMessage("Question is Required")
		.isString()
		.withMessage("Question should be string"),
	body("answer")
		.exists()
		.withMessage("Answer is Required")
		.isString()
		.withMessage("Answer should be string"),
	body("deck")
		.exists()
		.withMessage("Deck is Required")
		.isArray({ min: 0 })
		.withMessage("Deck Cannot be Empty"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

const idCardValidator = [
	query("id")
		.exists()
		.withMessage("Id is Required")
		.isString()
		.withMessage("Id should be string"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

export {
	cardValidator,
	idCardValidator,
};
