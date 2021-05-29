import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from './';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Dhaiwat',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
