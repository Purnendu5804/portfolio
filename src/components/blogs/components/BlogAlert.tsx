import React, { ReactNode } from 'react';
import { HiCheckCircle, HiExclamation, HiXCircle } from 'react-icons/hi';
import './BlogComponents.css';

interface AlertProps {
  title?: string;
  children: ReactNode;
}

export const BlogTip: React.FC<AlertProps> = ({ title = 'Tip', children }) => (
  <div className="blog-alert-box alert-tip">
    <div className="alert-header">
      <HiCheckCircle className="alert-icon" />
      <span className="alert-title">{title}</span>
    </div>
    <div className="alert-content">{children}</div>
  </div>
);

export const BlogWarn: React.FC<AlertProps> = ({ title = 'Warning', children }) => (
  <div className="blog-alert-box alert-warn">
    <div className="alert-header">
      <HiExclamation className="alert-icon" />
      <span className="alert-title">{title}</span>
    </div>
    <div className="alert-content">{children}</div>
  </div>
);

export const BlogDontDo: React.FC<AlertProps> = ({ title = "Don't Do This", children }) => (
  <div className="blog-alert-box alert-dont">
    <div className="alert-header">
      <HiXCircle className="alert-icon" />
      <span className="alert-title">{title}</span>
    </div>
    <div className="alert-content">{children}</div>
  </div>
);
