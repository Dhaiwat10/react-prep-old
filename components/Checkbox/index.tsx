import React from 'react';
import { Checkbox as FormCheckbox } from 'semantic-ui-react';

export interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return <FormCheckbox label={label} />;
};
