import { NextFunction, Request, Response } from "express";
import { body, check, validationResult, param, query } from "express-validator";

const userValidator = [
	body("username")
		.exists()
		.withMessage("User Name is Required")
		.isString()
		.withMessage("User Name should be string"),
	body("password")
		.exists()
		.withMessage("Password is Required")
		.isString()
		.withMessage("Password should be string")
		.isLength({ min: 5 })
		.withMessage("Password should be at least 5 characters"),
	body("progress").optional(),
	check("progress.*.correct")
		.if(body("progress").exists())
		.notEmpty()
		.withMessage("progress.*.correct should not be empty"),
	check("progress.*.incorrect")
		.if(body("progress").exists())
		.notEmpty()
		.withMessage("progress.*.incorrect should not be empty"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

const updateUserValidator = [
	query("id")
		.exists()
		.withMessage("User Id is Required")
		.isString()
		.withMessage("User Id should be string"),
	body("password")
		.exists()
		.withMessage("Password is Required")
		.isString()
		.withMessage("Password should be string")
		.isLength({ min: 5 })
		.withMessage("Password should be at least 5 characters"),

	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];

const idUserValidator = [
	query("id")
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


export { userValidator, updateUserValidator, idUserValidator };
