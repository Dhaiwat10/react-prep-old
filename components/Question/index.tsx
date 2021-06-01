import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { RadioGroup } from '../RadioGroup';

export interface QuestionProps {
  question: string;
  options: Array<string>;
  answer: 'a' | 'b' | 'c' | 'd';
}

export const Question: React.FC<QuestionProps> = ({
  question,
  options,
  answer,
}) => {
  const [selection, setSelection] = useState();

  const onChange = (data) => {
    setSelection(data);
  };

  const onSubmit = () => {
    if (selection === answer) {
      alert('Correct');
    } else {
      alert('Incorrect');
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

  return (
    <div>
      <p>{question}</p>
      <RadioGroup items={items} onChange={onChange} selection={selection} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};
