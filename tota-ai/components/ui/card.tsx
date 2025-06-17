import * as React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="card">{children}</div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="card-header">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="card-title">{children}</h3>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="card-content">{children}</div>
);
