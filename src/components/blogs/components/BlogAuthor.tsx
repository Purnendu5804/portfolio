import React, { ReactNode } from 'react';
import { userImages } from '../../../data/images';
import './BlogComponents.css';

interface BlogAuthorProps {
  name?: string;
  avatar?: string;
  children?: ReactNode;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = ({
  name = 'Purnendu',
  avatar = userImages.profile.avatar,
  children,
}) => {
  return (
    <div className="blog-author-card">
      <img src={avatar} alt={name} className="blog-author-avatar" />
      <div className="blog-author-info">
        <h4 className="blog-author-name">{name}</h4>
        {children && <div className="blog-author-reply">{children}</div>}
      </div>
    </div>
  );
};

export default BlogAuthor;
