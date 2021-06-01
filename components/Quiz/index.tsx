import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import {
  Quiz as QuizTypes,
  QuizState,
  Choices,
  Question as QuestionType,
} from '../../types';
import { Question } from '../Question';

export interface QuizProps extends QuizTypes {}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    score: 0,
    currentQuestionIndex: 0,
    questions: [],
  });
  const [loading, setLoading] = useState(true);
  const [shouldCalc, toggleCalc] = useState(false);

  useEffect(() => {
    let newQuizState = { ...quizState };
    for (let question of questions) {
      newQuizState.questions.push({
        question: question,
        correct: null,
        selection: null,
      });
    }
    setQuizState(newQuizState);
    setLoading(false);
    return () => {
      setLoading(false);
    };
  }, [questions]);

  const goNext = () => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
      });
    }
  };

  const goPrev = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1,
      });
    }
  };

  const onChoice = (
    question: QuestionType,
    questionIndex: number,
    choice: Choices
  ) => {
    const { answer } = question;
    let correct = false;
    if (answer === choice) {
      correct = true;
    }

    const newState = { ...quizState };
    newState.questions[questionIndex].correct = correct;
    newState.questions[questionIndex].selection = choice;
    setQuizState({ ...newState });
    toggleCalc((calc) => !calc);
  };

  const calculateScore = () => {
    const questions = quizState.questions;
    let counter = 0;
    for (let question of questions) {
      if (question.correct) {
        counter++;
      }
    }
    const newState = { ...quizState };
    newState.score = counter;
    setQuizState(newState);
  };

  useEffect(() => {
    calculateScore();
  }, [shouldCalc]);

  if (!loading) {
    const { question, answer, options } = quizState.questions[
      quizState.currentQuestionIndex
    ].question;

    return (
      <div>
        <h5>
          Score {quizState.score}/{questions.length}
        </h5>
        <h3>Quiz</h3>
        <Question
          question={question}
          options={options}
          answer={answer}
          onChoice={onChoice}
          questionIndex={quizState.currentQuestionIndex}
          disabled={
            !!quizState.questions[quizState.currentQuestionIndex].selection
          }
          choice={quizState.questions[quizState.currentQuestionIndex].selection}
        />
        <div style={{ marginTop: '2rem' }}>
          <Button
            onClick={goPrev}
            disabled={quizState.currentQuestionIndex == 0}
          >
            Previous
          </Button>
          <Button
            onClick={goNext}
            disabled={quizState.currentQuestionIndex == questions.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  return null;
};
