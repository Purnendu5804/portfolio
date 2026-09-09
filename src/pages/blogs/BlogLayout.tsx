import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineClock, HiOutlineTag } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './BlogLayout.css';

interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPostItem[] = [
  {
    slug: 'how-to-plan-a-project',
    title: 'Architecting Scalable Cloud & Distributed Systems',
    excerpt: 'A practical framework for planning systems, isolating state, and orchestrating asynchronous workers with Docker, Redis, and message queues.',
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['DevOps', 'Architecture', 'Docker', 'Redis'],
  },
];

export const BlogLayout: React.FC = () => {
  return (
    <div className="page-container blog-list-page">
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>

      <SectionTitle>Articles &amp; Engineering Notes</SectionTitle>

      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="blog-post-card"
          >
            <div className="blog-card-meta">
              <span className="blog-meta-item">
                <HiOutlineClock /> {post.date} • {post.readTime}
              </span>
            </div>

            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-excerpt">{post.excerpt}</p>

            <div className="blog-card-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="blog-card-tag">
                  <HiOutlineTag /> {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogLayout;
