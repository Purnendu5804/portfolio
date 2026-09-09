import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import ActivityCalendar from 'react-activity-calendar';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { leetCodeActivities, leetCodeStats } from '../../data/leetcodeData';
import './Calendar.css';

export const Calendar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'leetcode'>('github');

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <div className="calendar-tabs">
          <button
            type="button"
            className={`calendar-tab-btn ${activeTab === 'github' ? 'active' : ''}`}
            onClick={() => setActiveTab('github')}
            aria-label="Show GitHub Contributions"
          >
            <FaGithub className="calendar-tab-icon" />
            <span>GitHub</span>
          </button>
          <button
            type="button"
            className={`calendar-tab-btn ${activeTab === 'leetcode' ? 'active' : ''}`}
            onClick={() => setActiveTab('leetcode')}
            aria-label="Show LeetCode Submissions"
          >
            <SiLeetcode className="calendar-tab-icon" />
            <span>LeetCode</span>
          </button>
        </div>

        <div className="calendar-meta-side">
          {activeTab === 'github' ? (
            <a
              href="https://github.com/Purnendu5804"
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-user-link"
            >
              @Purnendu5804
            </a>
          ) : (
            <a
              href={leetCodeStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-user-link"
            >
              @{leetCodeStats.username}
            </a>
          )}
        </div>
      </div>

      <div className="calendar-overflow">
        {activeTab === 'github' ? (
          <GitHubCalendar
            username="Purnendu5804"
            colorScheme="dark"
            fontSize={12}
            blockSize={11}
            blockMargin={3}
            theme={{
              dark: ['#1e1e20', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        ) : (
          <ActivityCalendar
            data={leetCodeActivities}
            colorScheme="dark"
            fontSize={12}
            blockSize={11}
            blockMargin={3}
            theme={{
              dark: ['#1e1e20', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            labels={{
              totalCount: `{{count}} submissions in the past year`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
