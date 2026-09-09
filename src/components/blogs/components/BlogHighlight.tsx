import React, { ReactNode } from 'react';
import './BlogComponents.css';

export const WhiteBoldHighlight: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="blog-highlight-white-bold">{children}</span>
);

export const NormalHighlight: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="blog-highlight-normal">{children}</span>
);

export const CustomColorHighlight: React.FC<{ color: string; children: ReactNode }> = ({
  color,
  children,
}) => (
  <span className="blog-highlight-custom" style={{ color }}>
    {children}
  </span>
);
