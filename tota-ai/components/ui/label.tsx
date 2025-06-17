import * as React from 'react';

export const Label = ({ 
  htmlFor, 
  children 
}: { 
  htmlFor: string; 
  children: React.ReactNode; 
}) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);
