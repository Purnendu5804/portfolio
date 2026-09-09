import React from 'react';
import './BlogComponents.css';

export const BlogImage: React.FC<{ src: string; alt: string; width?: string }> = ({
  src,
  alt,
  width = '100%',
}) => (
  <div className="blog-single-image-wrapper" style={{ width }}>
    <img src={src} alt={alt} className="blog-img" />
  </div>
);

export const BlogImages: React.FC<{ images: { src: string; alt: string }[] }> = ({
  images,
}) => (
  <div className="blog-images-grid">
    {images.map((img, idx) => (
      <img key={idx} src={img.src} alt={img.alt} className="blog-img" />
    ))}
  </div>
);

export const BlogEmoji: React.FC<{
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}> = ({ src, alt, size = 'medium' }) => (
  <img src={src} alt={alt} className={`blog-emoji-img emoji-${size}`} />
);
