export type Choices = 'a' | 'b' | 'c' | 'd' | null;

export interface Question {
  question: string;
  options: Array<string>;
  answer: Choices;
}

export interface Quiz {
  questions: Array<Question>;
}

export interface QuestionState {
  question: Question;
  selection: Choices;
  correct: boolean | null;
}

export interface QuizState {
  score: number;
  currentQuestionIndex: number;
  questions: Array<QuestionState>;
}
