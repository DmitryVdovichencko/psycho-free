export interface IQuiz {
	questions: IQuizQuestion[];
	answers: IQuestionAnswers;
	results: IQuizResult[];
	answersCount: number;
	currentResult: number;
}

export interface IQuizQuestion {
	id: string;
	question: string;
	options: IQuestionOption[];
}

export interface IQuestionOption {
	id: string;
	label: string;
	value: number;
}

export interface IQuestionAnswers {
	[key: string]: {
		answerId: string | null
		value: number | null
	}
}

export interface IQuizResult {
	from: number;
	to: number;
	description: string;
}

