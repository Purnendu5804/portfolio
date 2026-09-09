import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';

export const Calendar: React.FC = () => {
  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3 className="calendar-title">GitHub Contributions</h3>
        <a
          href="https://github.com/Purnendu5804"
          target="_blank"
          rel="noopener noreferrer"
          className="calendar-user-link"
        >
          @Purnendu5804
        </a>
      </div>

      <div className="calendar-overflow">
        <GitHubCalendar
          username="Purnendu5804"
          colorScheme="dark"
          fontSize={12}
          blockSize={11}
          blockMargin={3}
          theme={{
            dark: ['#383838', '#606060', '#8C8C8C', '#BABABA', '#EBEBEB'],
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
