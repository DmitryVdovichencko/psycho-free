import type {
  IQuestionAnswers,
  IQuiz,
  IQuizQuestion,
  IQuizResult,
  IQuestionOption,
} from "./quiz.interface";

export class Quiz implements IQuiz {
  questions: IQuizQuestion[];
  answers: IQuestionAnswers;
  results: IQuizResult[];
  answersCount: number;
  currentResult: number;
  constructor({ questions, results }: Pick<IQuiz, "questions" | "results">) {
    this.questions = questions;
    this.results = results;
    this.answers = this.questions.reduce((answersObject, { id }) => {
      return {
        ...answersObject,
        [id]: {
          answerId: null,
          value: null,
        },
      };
    }, {});
    this.answersCount = 0;
    this.currentResult = 0;
  }

  answer(
    questionId: string,
    { id, value }: Pick<IQuestionOption, "id" | "value">
  ) {
    this.answers[questionId] = {
      answerId: id,
      value,
    };
    this.answersCount++;
    this.currentResult = this.currentResult + value;
  }

  getResultDescription() {
    if (this.questions.length !== this.answersCount) {
      throw "You should answer all questions";
    }
    return this.results.find(
      ({ from, to }) => this.currentResult >= from && this.currentResult <= to
    )?.description;
  }

	reset(){
    this.answers = this.questions.reduce((answersObject, { id }) => {
      return {
        ...answersObject,
        [id]: {
          answerId: null,
          value: null,
        },
      };
    }, {});
    this.answersCount = 0;
    this.currentResult = 0;
	}
}
