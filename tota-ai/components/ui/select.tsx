"use client";

import * as React from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  placeholder,
  children
}: {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (value: string) => {
    onValueChange(value);
    setIsOpen(false);
  };

  const foundChild = React.Children.toArray(children).find(
    (child) => React.isValidElement<SelectItemProps>(child) && child.props.value === value
  ) as React.ReactElement<SelectItemProps> | undefined;

  return (
    <div className="select">
      <div 
        className="select-trigger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {foundChild ? foundChild.props.children : placeholder}
      </div>
      {isOpen && (
        <div className="select-content">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<SelectItemProps>(child)) {
              return React.cloneElement(child, {
                onClick: () => handleChange(child.props.value)
              } as any);
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

export const SelectItem: React.FC<SelectItemProps> = ({ value, children, onClick }) => {
  return (
    <div className="select-item" onClick={onClick}>
      {children}
    </div>
  );
};
