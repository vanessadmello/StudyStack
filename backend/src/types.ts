export type Card = {
	_id: string;
	username: string;
	question: string;
	answer: string;
	deck: Array<string>;
	createdAt: Date;
	updatedAt: Date;
	spacedAt: Date;
	spacedRep: number;
};
