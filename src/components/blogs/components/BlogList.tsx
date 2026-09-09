import React, { ReactNode } from 'react';
import './BlogComponents.css';

interface BlogListProps {
  items: ReactNode[];
}

export const BlogOrderedList: React.FC<BlogListProps> = ({ items }) => (
  <ol className="blog-ordered-list">
    {items.map((item, idx) => (
      <li key={idx} className="blog-list-item">
        {item}
      </li>
    ))}
  </ol>
);

export const BlogUnorderedList: React.FC<BlogListProps> = ({ items }) => (
  <ul className="blog-unordered-list">
    {items.map((item, idx) => (
      <li key={idx} className="blog-list-item">
        {item}
      </li>
    ))}
  </ul>
);
