import * as React from 'react';

export const Checkbox = ({ 
  id, 
  children = null, 
  ...props 
}: { 
  id: string; 
  children?: React.ReactNode; 
  [key: string]: any;
}) => (
  <div className="checkbox">
    <input type="checkbox" id={id} {...props} />
    {children}
  </div>
);
