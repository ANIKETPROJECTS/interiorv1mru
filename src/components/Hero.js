import React, { useEffect, useRef, useState } from 'react';
import '../styles/hero.css';

// Import hero images
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import hero4 from '../assets/hero-4.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // Array of imported images
  const images = [hero1, hero2, hero3, hero4];

  // Smooth transition management
  const changeSlide = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  // Auto-play carousel with proper cleanup
  useEffect(() => {
    if (!isAutoPlaying) return;

    // Clear any existing timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    // Create new interval
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // 5 seconds per slide

    // Cleanup on unmount or when dependencies change
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate parallax offset (subtle movement)
      const moveX = ((x - centerX) / centerX) * 12;
      const moveY = ((y - centerY) / centerY) * 12;
      
      // Apply parallax to active image
      const activeImages = container.querySelectorAll('.hero-image.active .image-layer');
      activeImages.forEach((img) => {
        img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      });
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      
      // Reset parallax on mouse leave
      const activeImages = containerRef.current.querySelectorAll('.hero-image.active .image-layer');
      activeImages.forEach((img) => {
        img.style.transform = 'translate(0, 0) scale(1.1)';
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Manual slide navigation
  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    
    changeSlide(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="hero" ref={containerRef}>
      {/* Dark gradient overlay for text readability */}
      <div className="hero-overlay"></div>
      
      {/* Hero Content - Taglines */}
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">THE #1 INTERIOR DESIGN SERVICE</p>
          <button className="hero-cta">FIND YOUR STYLE</button>
        </div>
      </div>

      {/* Image Carousel Container */}
      <div className="hero-images-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentSlide ? 'active' : ''} ${
              index === (currentSlide - 1 + images.length) % images.length ? 'prev' : ''
            }`}
          >
            {/* Ken Burns zoom effect layer */}
            <div 
              className="image-layer" 
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;