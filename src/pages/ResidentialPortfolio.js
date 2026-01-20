import React from 'react';
import '../styles/pages/ResidentialPortfolio.css';

const portfolioData = {
  'living-room': {
    title: 'Living Room Design Ideas',
    description: 'Explore living room design ideas to craft your dream living room. As one of the most important areas in your home, we\'ll help you find the design you like best.',
    images: [
      'stock_images/luxury_modern_living_e3459d3b.jpg',
      'stock_images/luxury_modern_living_af5894f6.jpg',
      'stock_images/luxury_modern_living_9dd2eb17.jpg',
      'stock_images/luxury_modern_living_72ebe4a6.jpg',
      'stock_images/luxury_modern_living_19274cd3.jpg',
      'stock_images/luxury_modern_living_49c713ed.jpg'
    ]
  },
  'bedroom': {
    title: 'Bedroom Sanctuary Designs',
    description: 'Create a restful haven with our curated bedroom designs. We focus on comfort, lighting, and serene aesthetics to ensure your private space is perfectly balanced.',
    images: [
      'stock_images/luxury_modern_bedroo_2bdf333f.jpg',
      'stock_images/luxury_modern_bedroo_03c14d4e.jpg',
      'stock_images/luxury_modern_bedroo_e0879bd5.jpg',
      'stock_images/luxury_modern_bedroo_f7ebc6f7.jpg',
      'stock_images/luxury_modern_bedroo_f172e806.jpg',
      'stock_images/luxury_modern_bedroo_23e8da54.jpg'
    ]
  },
  'kitchen': {
    title: 'Modern Kitchen Innovations',
    description: 'Where functionality meets high-end design. Our kitchen portfolios showcase efficient layouts, premium materials, and cutting-edge aesthetics for the heart of your home.',
    images: [
      'stock_images/luxury_modern_kitche_c58c5c03.jpg',
      'stock_images/luxury_modern_kitche_26726021.jpg',
      'stock_images/luxury_modern_kitche_f98a402e.jpg',
      'stock_images/luxury_modern_kitche_bb2c5729.jpg',
      'stock_images/luxury_modern_kitche_933c7d08.jpg',
      'stock_images/luxury_modern_kitche_33c5644c.jpg'
    ]
  },
  'dining-room': {
    title: 'Elegant Dining Spaces',
    description: 'Design a space for connection and celebration. Our dining room projects emphasize atmospheric lighting, bespoke furniture, and sophisticated layouts.',
    images: [
      'stock_images/luxury_modern_dining_98e63b23.jpg',
      'stock_images/luxury_modern_dining_998080bd.jpg',
      'stock_images/luxury_modern_dining_2d631e89.jpg',
      'stock_images/luxury_modern_dining_c4249c13.jpg',
      'stock_images/luxury_modern_dining_8cbf9cca.jpg',
      'stock_images/luxury_modern_dining_643eb592.jpg'
    ]
  }
};

const ResidentialPortfolio = ({ category }) => {
  const data = portfolioData[category] || portfolioData['living-room'];

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1 className="portfolio-title">{data.title}</h1>
        <p className="portfolio-description">{data.description}</p>
        <div className="portfolio-category-label">
          <span>{category.replace('-', ' ')}</span>
          <button className="clear-filter">×</button>
        </div>
      </div>
      
      <div className="portfolio-grid">
        {data.images.map((src, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-image-container">
              <img src={`/${src}`} alt={`${category} design ${index + 1}`} loading="lazy" />
              <div className="portfolio-item-overlay">
                <span className="portfolio-item-tag">Residential</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentialPortfolio;