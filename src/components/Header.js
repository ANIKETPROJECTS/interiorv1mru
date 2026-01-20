import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/logo1.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const getHeaderClass = () => {
    let classes = 'header';
    if (isScrolled) classes += ' header-sticky';
    if (!isScrolled && isHomePage) classes += ' header-transparent';
    if (isMobileMenuOpen) classes += ' mobile-menu-active';
    return classes;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={getHeaderClass()}>
      <div className="header-container">
        {/* Desktop Navbar Layout: Logo Centered, Menu Split */}
        <div className="header-desktop-layout desktop-only">
          <div className="nav-left">
            <div className="nav-item nav-dropdown">
              <span className="nav-link">DESIGN SERVICES</span>
              
              <div className="dropdown-menu">
                <a href="#about">How We Work</a>
                <Link to="/services/materials-selection">Materials & Fabrication</Link>
                <Link to="/services/custom-furniture">Custom Furniture Design</Link>
                <Link to="/services/finishes-textures">Finishes, Textures & Colors</Link>
              </div>
            </div>

            <div className="nav-item nav-dropdown">
              <span className="nav-link">DESIGN PORTFOLIO</span>
              
              <div className="dropdown-menu">
                <Link to="/residential/living-room">Living Room</Link>
                <Link to="/residential/bedroom">Bedroom</Link>
                <Link to="/residential/kitchen">Kitchen</Link>
                <Link to="/residential/dining-room">Dining Room</Link>
              </div>
            </div>

            <div className="nav-item nav-dropdown">
              <span className="nav-link">BY LOCATIONS</span>
              
              <div className="dropdown-menu">
                <a href="#locations">Ambernath</a>
                <a href="#locations">Thane</a>
                <a href="#locations">Badlapur</a>
                <a href="#locations">Kalyan</a>
                <a href="#locations">All Locations</a>
              </div>
            </div>
          </div>



          <div className="nav-right">
            <div className="nav-item nav-dropdown">
              <span className="nav-link">ABOUT US</span>
              
              <div className="dropdown-menu">
                <a href="#about">Our Story</a>
                <a href="#about">Team</a>
                <a href="#about">Awards</a>
              </div>
            </div>

            <a href="#testimonials" className="nav-item">TESTIMONIALS</a>
            <a href="#journal" className="nav-item">JOURNAL</a>
            <a href="#contact" className="nav-item">CONTACT</a>
          </div>
        </div>

        {/* Mobile Navbar Layout */}
        <div className="header-mobile-layout mobile-tablet-only">

          <button 
            className="hamburger-menu" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <div className="mobile-nav-item">
              <span className="mobile-nav-label">DESIGN SERVICES</span>
              <div className="mobile-sub-menu">
                <a href="#about" onClick={toggleMobileMenu}>How We Work</a>
                <Link to="/services/materials-selection">Materials & Fabrication</Link>
                <Link to="/services/custom-furniture">Custom Furniture Design</Link>
                <Link to="/services/finishes-textures">Finishes, Textures & Colors</Link>
              </div>
            </div>
            <div className="mobile-nav-item">
              <span className="mobile-nav-label">DESIGN PORTFOLIO</span>
              <div className="mobile-sub-menu">
                <Link to="/residential/living-room">Living Room</Link>
                <Link to="/residential/bedroom">Bedroom</Link>
                <Link to="/residential/kitchen">Kitchen</Link>
                <Link to="/residential/dining-room">Dining Room</Link>
              </div>
            </div>
            <a href="#testimonials" className="mobile-nav-link" onClick={toggleMobileMenu}>TESTIMONIALS</a>
            <a href="#journal" className="mobile-nav-link" onClick={toggleMobileMenu}>JOURNAL</a>
            <a href="#contact" className="mobile-nav-link" onClick={toggleMobileMenu}>CONTACT</a>
            <div className="mobile-nav-actions">
              <button className="btn-get-started">GET STARTED</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
