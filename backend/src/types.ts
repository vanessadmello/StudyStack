export type Card = {
	_id?: string;
	userId: string;
	question: string;
	answer: object;
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
	chatIds: Array<string>;
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
	toReview?: number;
	reviewed?: number;
};

export type Chat = {
	_id: string;
	name: string;
	adminId: string
	userIds: Array<string>;
	messages: Array<Message>;
	createdAt?: Date;
	updatedAt?: Date;
};

export type Message = {
	_id?: string;
	content: string;
	userId: string;
	timestamp?: Date;
};
