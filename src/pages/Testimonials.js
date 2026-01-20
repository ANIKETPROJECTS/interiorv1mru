import React, { useState } from 'react';
import '../styles/pages/Testimonials.css';

const testimonials = [
  {
    name: 'Shaniece',
    title: 'Another Masterpiece',
    text: 'This was my second time working with the same designer with Havenly. She understands what we like more than we even understand it. I wouldn\'t change anything from beginning to end, the process was stellar. The level of detail of the designs and the items chosen compared to my vision are an absolute match.',
    rating: 5
  },
  {
    name: 'Pam',
    title: 'Amazing experience!!',
    text: 'The entire process was seamless and fun. The designer incorporated new and existing furniture pieces, recommended changing the floorplan/layout to maximize the functionality of the space and chose beautiful accent pieces that I adore. I\'m very pleased with the final result.',
    rating: 5
  },
  {
    name: 'Blaine',
    title: 'What a transformation!',
    text: 'SJ Interior Studio saved me from an entire small home renovation. They made it fun, efficient and within my budget. The catalog of items is incredible. Thank you for making my house a home.',
    rating: 5
  },
  {
    name: 'Sarah',
    title: 'Exceeded Expectations',
    text: 'The team at SJ Interior Studio transformed my outdated kitchen into a modern culinary dream. Their attention to detail and ability to work within my timeline was truly impressive. I couldn\'t be happier with the results!',
    rating: 5
  },
  {
    name: 'Michael',
    title: 'Professional and Creative',
    text: 'Working with SJ Interior Studio was a breeze. They brought fresh, creative ideas to my commercial office space while remaining highly professional and responsive throughout the entire project. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily',
    title: 'Absolute Perfection',
    text: 'I was hesitant about hiring a designer, but SJ Interior Studio made the process so easy. They perfectly captured the aesthetic I was going for and made my living room feel both cozy and sophisticated. I love my new space!',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isMobile = window.innerWidth < 768;
  const slideWidth = isMobile ? window.innerWidth - 48 : 450;

  return (
    <div className="testimonials-page">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-intro">
            <span className="section-label">REVIEWS</span>
            <h2 className="testimonials-hero-title">
              Over 100,000<br />
              designs completed<br />
              for happy clients.
            </h2>
            <button className="see-all-btn">SEE ALL REVIEWS</button>
          </div>
          
          <div className="testimonials-slider">
            <div 
              className="testimonials-track"
              style={{ 
                transform: `translateX(-${activeIndex * slideWidth}px)`,
                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {testimonials.map((item, index) => (
                <div key={index} className="testimonial-card">
                  <span className="by-name">by {item.name}</span>
                  <div className="stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <h3 className="testimonial-title">{item.title}</h3>
                  <p className="testimonial-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="slider-nav">
          <span className="nav-link prev" onClick={prevSlide}>PREV</span>
          <div className="nav-line">
            <div 
              className="nav-progress" 
              style={{ 
                width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                height: '100%',
                background: '#ffffff',
                transition: 'width 0.5s ease'
              }}
            ></div>
          </div>
          <span className="nav-link next" onClick={nextSlide}>NEXT</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;