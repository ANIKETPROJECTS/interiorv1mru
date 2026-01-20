import React from 'react';
import '../styles/pages/Journal.css';

const posts = [
  {
    title: 'Minimalist Magic: Less is More in 2026',
    excerpt: 'Discover why minimal design is making a massive comeback this year and how you can apply it to your home.',
    date: 'January 15, 2026',
    category: 'Design Trends',
    image: '/stock_images/luxury_modern_living_e3459d3b.jpg'
  },
  {
    title: 'The Art of Choosing the Perfect Palette',
    excerpt: 'Color psychology plays a huge role in interior design. Learn how to pick colors that evoke the right emotions.',
    date: 'January 10, 2026',
    category: 'Guides',
    image: '/stock_images/luxury_modern_bedroo_2bdf333f.jpg'
  },
  {
    title: 'Smart Homes, Beautiful Spaces',
    excerpt: 'Integrating technology without compromising on aesthetics. Our top tips for the modern homeowner.',
    date: 'January 5, 2026',
    category: 'Innovation',
    image: '/stock_images/luxury_modern_kitche_c58c5c03.jpg'
  }
];

const Journal = () => {
  return (
    <div className="journal-page">
      <div className="journal-header">
        <span className="section-label">JOURNAL</span>
        <h1 className="journal-title">Design stories & inspiration</h1>
      </div>
      
      <div className="journal-grid">
        {posts.map((post, index) => (
          <div key={index} className="journal-post">
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
              <span className="post-meta">{post.category} • {post.date}</span>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href="#" className="read-more">READ STORY</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;