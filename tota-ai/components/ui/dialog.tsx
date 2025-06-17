import * as React from 'react';

export const Dialog = ({ 
  open, 
  onOpenChange, 
  children,
  className = ''
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void; 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div className={`dialog ${className}`}>
    {children}
  </div>
);

export const DialogTrigger = ({ 
  children,
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div className={`dialog-trigger ${className}`}>
    {children}
  </div>
);

export const DialogContent = ({ 
  children,
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div className={`dialog-content ${className}`}>
    {children}
  </div>
);

export const DialogHeader = ({ 
  children,
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div className={`dialog-header ${className}`}>
    {children}
  </div>
);

export const DialogTitle = ({ 
  children,
  className = ''
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <h3 className={`dialog-title ${className}`}>
    {children}
  </h3>
);
