import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ResidentialPortfolio from './pages/ResidentialPortfolio';
import DesignServices from './pages/DesignServices';
import Testimonials from './pages/Testimonials';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="journal">
                  <Journal />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            } />
            <Route path="/residential/living-room" element={<ResidentialPortfolio category="living-room" />} />
            <Route path="/residential/bedroom" element={<ResidentialPortfolio category="bedroom" />} />
            <Route path="/residential/kitchen" element={<ResidentialPortfolio category="kitchen" />} />
            <Route path="/residential/dining-room" element={<ResidentialPortfolio category="dining-room" />} />
            <Route path="/services/materials-selection" element={<DesignServices type="materials-selection" />} />
            <Route path="/services/custom-furniture" element={<DesignServices type="custom-furniture" />} />
            <Route path="/services/finishes-textures" element={<DesignServices type="finishes-textures" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;