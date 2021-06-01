import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { RadioGroup } from '../RadioGroup';
import { Choices, Question as QuestionTypes } from '../../types';

import classes from './Question.module.css';

export interface QuestionProps extends QuestionTypes {
  onChoice: (
    question: QuestionTypes,
    questionIndex: number,
    choice: Choices
  ) => void;
  questionIndex: number;
  disabled: boolean;
  choice: Choices;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  options,
  answer,
  onChoice,
  questionIndex,
  disabled,
  choice,
}) => {
  const [selection, setSelection] = useState();

  const onChange = (data) => {
    setSelection(data);
  };

  const onSubmit = () => {
    if (!disabled) {
      onChoice({ question, options, answer }, questionIndex, selection);
    }
  };

  const items = [
    {
      value: 'a',
      label: options[0],
    },
    {
      value: 'b',
      label: options[1],
    },
    {
      value: 'c',
      label: options[2],
    },
    {
      value: 'd',
      label: options[3],
    },
  ];

  const resetState = () => {
    setSelection(null);
  };

  useEffect(() => {
    resetState();
  }, [question]);

  return (
    <Form className={classes.Container}>
      <label>{question}</label>
      <RadioGroup
        items={items}
        onChange={onChange}
        selection={choice ? choice : selection}
      />
      <Button primary onClick={onSubmit} disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
};
