import React, { ReactNode } from 'react';
import './BlogComponents.css';

interface BlogTextLineProps {
  icon: ReactNode;
  children: ReactNode;
}

export const BlogTextLine: React.FC<BlogTextLineProps> = ({ icon, children }) => (
  <div className="blog-text-line">
    <span className="text-line-icon">{icon}</span>
    <span className="text-line-content">{children}</span>
  </div>
);

export default BlogTextLine;
