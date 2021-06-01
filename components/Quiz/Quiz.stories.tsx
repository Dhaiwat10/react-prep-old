import React from 'react';
import { Story, Meta } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';
import { questions } from '../../mock';

import { Quiz, QuizProps } from './';

export default {
  title: 'Main/Quiz',
  component: Quiz,
  argTypes: {
    questions: { control: 'object' },
  },
} as Meta;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  questions,
};
