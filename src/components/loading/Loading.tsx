import React from 'react';
import './Loading.css';

export const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <svg
          className="loading-svg"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circuit track */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#1a1b1c"
            strokeWidth="4"
          />
          <circle
            className="loading-trace"
            cx="50"
            cy="50"
            r="42"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray="70 200"
            strokeLinecap="round"
          />
          {/* Inner chip */}
          <rect
            x="35"
            y="35"
            width="30"
            height="30"
            rx="4"
            fill="#1a1b1c"
            stroke="#444"
            strokeWidth="2"
          />
          {/* Core glow */}
          <circle cx="50" cy="50" r="6" fill="#3b82f6" className="chip-core" />
          {/* Circuit nodes */}
          <line x1="50" y1="8" x2="50" y2="35" stroke="#444" strokeWidth="2" />
          <line x1="50" y1="65" x2="50" y2="92" stroke="#444" strokeWidth="2" />
          <line x1="8" y1="50" x2="35" y2="50" stroke="#444" strokeWidth="2" />
          <line x1="65" y1="50" x2="92" y2="50" stroke="#444" strokeWidth="2" />
        </svg>
        <div className="loading-text">Loading systems...</div>
      </div>
    </div>
  );
};

export default Loading;
