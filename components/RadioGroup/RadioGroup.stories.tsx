import React from 'react';
import { Story, Meta } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

import { RadioGroup, RadioGroupProps } from '.';

export default {
  title: 'Main/RadioGroup',
  component: RadioGroup,
  argTypes: {
    items: { control: 'object' },
  },
} as Meta;

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />;

const items = [
  {
    label: 'Option A',
    value: 'a',
  },
  {
    label: 'Option B',
    value: 'b',
  },
  {
    label: 'Option C',
    value: 'c',
  },
  {
    label: 'Option D',
    value: 'd',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  items,
};
