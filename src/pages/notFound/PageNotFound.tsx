import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import './PageNotFound.css';

export const PageNotFound: React.FC = () => {
  return (
    <div className="page-container not-found-page">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-desc">
          The requested coordinate does not exist in this cluster.
        </p>
        <Link to="/" className="not-found-home-btn">
          <HiArrowLeft /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
