import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './BlogComponents.css';

interface BlogCodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export const BlogCodeBlock: React.FC<BlogCodeBlockProps> = ({
  code,
  filename,
  language = 'TypeScript',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog-code-box">
      <div className="blog-code-header">
        <span className="code-filename">{filename || language}</span>
        <button
          className="code-copy-btn"
          onClick={handleCopy}
          type="button"
          title="Copy code"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="blog-code-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default BlogCodeBlock;
