import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineBookOpen } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { booksData } from '../../data/books';
import './BooksLayout.css';

export const BooksLayout: React.FC = () => {
  return (
    <div className="page-container books-page">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <SectionTitle>Reading List &amp; Takeaways</SectionTitle>

      <div className="books-page-intro">
        <p>
          A log of books I&rsquo;ve read, accompanied by a concise two-line reflection on the core insights and mental models I took away from each.
        </p>
      </div>

      <div className="books-list">
        {booksData.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-card-header">
              <div className="book-icon-wrapper">
                <HiOutlineBookOpen className="book-icon" />
              </div>

              <div className="book-title-meta">
                <div className="book-title-row">
                  <h3 className="book-title">{book.title}</h3>
                  <span className="book-status-tag">{book.status}</span>
                </div>
                <div className="book-author-row">
                  <span className="book-author">by {book.author}</span>
                  {book.yearRead && (
                    <span className="book-year">• Read in {book.yearRead}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="book-takeaway-box">
              <span className="takeaway-label">Key Takeaway:</span>
              <div className="takeaway-notes">
                {book.takeaway.split('\n').map((line, idx) => (
                  <p key={idx} className="takeaway-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksLayout;
