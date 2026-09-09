import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineBookOpen } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { booksData, booksSectionInfo } from '../../data/books';
import './BooksLayout.css';

export const BooksLayout: React.FC = () => {
  return (
    <div className="page-container books-page">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <SectionTitle>{booksSectionInfo.section}</SectionTitle>

      <div className="books-page-intro">
        <p>{booksSectionInfo.bio}</p>
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
                  <span className="book-category-tag">{book.category}</span>
                </div>
                <div className="book-author-row">
                  <span className="book-author">by {book.author}</span>
                </div>
              </div>
            </div>

            <div className="book-takeaway-box">
              <span className="takeaway-label">Key Insight &amp; Impact:</span>
              <p className="takeaway-line">{book.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksLayout;
