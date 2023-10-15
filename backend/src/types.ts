export type Card = {
	_id?: string;
	userId: string;
	question: string;
	answer: string;
	deck: Deck;
	spacedAt: Date;
	spacedRep: number;
	createdAt?: Date;
	updatedAt?: Date;
};

export type User = {
	_id?: string;
	user: string;
	password: string;
	progress: Array<Answer>;
	createdAt?: Date;
	updatedAt?: Date;
};

export type Answer = {
	timestamp?: Date;
	correct: number;
	incorrect: number;
};

export type Deck = {
	_id?: string;
	userId: string;
	name: string;
	color: string;
};
