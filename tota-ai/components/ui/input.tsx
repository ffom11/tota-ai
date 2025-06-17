import * as React from 'react';

export const Input = ({ placeholder }: { placeholder: string }) => (
  <input type="text" placeholder={placeholder} className="input" />
);
