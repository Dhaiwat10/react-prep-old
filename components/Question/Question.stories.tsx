import React from 'react';
import { Story, Meta } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

import { Question, QuestionProps } from './';

export default {
  title: 'Main/Question',
  component: Question,
  argTypes: {
    question: { control: 'string' },
    answer: { control: { type: 'select', options: ['a', 'b', 'c', 'd'] } },
    options: { control: 'object' },
  },
} as Meta;

const Template: Story<QuestionProps> = (args) => <Question {...args} />;

const options = ['Option A', 'Option B', 'Option C', 'Option D'];
const question = 'Choose the correct option.';

export const Primary = Template.bind({});
Primary.args = {
  options,
  question,
  answer: 'a',
};
