import React from 'react';

export interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" />
    </div>
  );
};
