import React, { ReactNode } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './BlogComponents.css';

export const BlogLink: React.FC<{
  href: string;
  children: ReactNode;
  external?: boolean;
}> = ({ href, children, external = true }) => (
  <a
    href={href}
    target={external ? '_blank' : '_self'}
    rel={external ? 'noopener noreferrer' : undefined}
    className="blog-link"
  >
    <span>{children}</span>
    {external && <HiOutlineExternalLink className="blog-link-external-icon" />}
  </a>
);

export const BlogButton: React.FC<{
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
}> = ({ href, onClick, children, icon }) => {
  if (href) {
    return (
      <a href={href} className="blog-button" target="_blank" rel="noopener noreferrer">
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button onClick={onClick} className="blog-button" type="button">
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export const BlogButtonsContainer: React.FC<{
  children: ReactNode;
  direction?: 'row' | 'column';
}> = ({ children, direction = 'row' }) => (
  <div className={`blog-buttons-container dir-${direction}`}>{children}</div>
);
