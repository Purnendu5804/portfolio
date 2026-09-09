import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import './BlogLayoutContainer.css';

interface BlogLayoutContainerProps {
  children: ReactNode;
}

export const BlogLayoutContainer: React.FC<BlogLayoutContainerProps> = ({ children }) => {
  return (
    <article className="blog-article-container">
      <div className="blog-back-wrapper">
        <Link to="/blogs" className="blog-back-link">
          <HiArrowLeft /> Back to Blogs
        </Link>
      </div>

      <div className="blog-body-content">{children}</div>
    </article>
  );
};

export default BlogLayoutContainer;
