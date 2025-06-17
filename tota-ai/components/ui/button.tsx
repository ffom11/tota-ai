import * as React from 'react';

export const Button = ({ 
  children, 
  onClick,
  asChild = false,
  variant = 'default',
  size = 'default',
  className = ''
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  asChild?: boolean;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'icon' | 'sm' | 'lg';
  className?: string;
}) => {
  if (asChild) {
    return <>{children}</>;
  }
  
  const variantClasses = {
    default: 'bg-blue-500 text-white',
    ghost: 'bg-transparent text-gray-700',
    outline: 'border border-gray-300 bg-white text-gray-700'
  };
  
  const sizeClasses = {
    default: 'py-2 px-4',
    icon: 'p-2',
    sm: 'py-1 px-2',
    lg: 'py-3 px-6'
  };
  
  return (
    <button 
      className={`button ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
