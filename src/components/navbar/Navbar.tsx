import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaStar } from 'react-icons/fa';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/learning"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Learning
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Resume
          </NavLink>
        </div>

        <div className="navbar-actions">
          <a
            href="https://github.com/Purnendu5804"
            target="_blank"
            rel="noopener noreferrer"
            className="star-repo-btn"
            title="GitHub Profile"
          >
            <FaGithub className="star-icon-gh" />
            <FaStar className="star-icon-star" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
