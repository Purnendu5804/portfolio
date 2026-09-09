import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './BlogComponents.css';

interface BlogTerminalProps {
  commands: string[];
  title?: string;
}

export const BlogTerminal: React.FC<BlogTerminalProps> = ({
  commands,
  title = 'Terminal',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog-terminal-box">
      <div className="blog-terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">{title}</span>
        <button
          className="terminal-copy-btn"
          onClick={handleCopy}
          type="button"
          title="Copy commands"
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>

      <div className="blog-terminal-body">
        {commands.map((cmd, idx) => (
          <div key={idx} className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTerminal;
