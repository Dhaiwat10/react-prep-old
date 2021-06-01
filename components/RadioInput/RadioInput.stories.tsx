import React from 'react';
import { Story, Meta } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

import { RadioInput, RadioProps } from '.';

export default {
  title: 'Main/Radio',
  component: RadioInput,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    value: { control: 'text' },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => <RadioInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Option A',
  checked: false,
  value: 'a',
};
