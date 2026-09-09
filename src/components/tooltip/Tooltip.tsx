import React, { forwardRef, useState, ReactNode } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ text, position = 'top', children, className = '' }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div
        className={`tooltip-wrapper ${className}`}
        ref={ref}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
        {visible && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            {text}
            <span className={`tooltip-arrow tooltip-arrow-${position}`} />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
export default Tooltip;
