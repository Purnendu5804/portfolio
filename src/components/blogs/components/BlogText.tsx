import React, { ReactNode } from 'react';
import './BlogComponents.css';

export const BlogTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="blog-title-h1">{children}</h1>
);

export const BlogHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="blog-header-h2">{children}</h2>
);

export const BlogDesc: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="blog-desc-text">{children}</p>
);

export const BlogParagraph: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="blog-paragraph-text">{children}</p>
);
