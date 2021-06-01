import React, { FormEvent } from 'react';
import { CheckboxProps, Radio } from 'semantic-ui-react';

export interface RadioProps {
  label: string;
  checked: boolean;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void;
}

export const RadioInput: React.FC<RadioProps> = ({
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <Radio checked={checked} value={value} label={label} onChange={onChange} />
  );
};
