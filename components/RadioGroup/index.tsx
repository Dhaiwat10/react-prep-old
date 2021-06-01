import React from 'react';
import { CheckboxProps, Form } from 'semantic-ui-react';
import { RadioInput } from '../RadioInput';

export interface RadioGroupProps {
  items: Array<{ value: string; label: string }>;
  onChange: (data: string | number | null) => void;
  selection: string | number | null;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  onChange,
  selection,
}) => {
  const onValueChange: (
    event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => void = (e, data) => {
    console.log(data.value);
    onChange(data.value);
  };

  return (
    <Form>
      <Form.Group className="RadioGroup">
        {items.map(({ label, value }, idx) => (
          <RadioInput
            checked={value === selection}
            onChange={onValueChange}
            label={label}
            value={value}
            key={idx}
          />
        ))}
      </Form.Group>
    </Form>
  );
};
