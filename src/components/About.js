import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  // State to track which accordion item is open
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion function
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Accordion data
  const values = [
    {
      title: "INTEGRITY IS EVERYTHING",
      content: "Our team conducts our interior design business with the highest level of integrity standards. We act in an open, honest, positive manner and with uncompromising honesty. We are always guided by our moral principles following in everything we do, no matter who's watching."
    },
    {
      title: "WE ARE TRUSTWORTHY",
      content: "Trust is the foundation of every relationship we build. We earn your trust through consistent actions, transparent communication, and delivering on our promises. Your confidence in us drives everything we do."
    },
    {
      title: "PASSION AT THE HEART OF EVERYTHING WE DO",
      content: "Design is not just our profession—it's our passion. We bring enthusiasm, creativity, and dedication to every project, ensuring that your space reflects not only our expertise but our genuine love for creating beautiful, functional homes."
    },
    {
      title: "WE PROVIDE VALUE AND QUALITY",
      content: "Quality is never an accident. It's the result of careful planning, skilled execution, and attention to detail. We're committed to providing exceptional value through thoughtful design solutions and premium materials that stand the test of time."
    },
    {
      title: "WE ARE LIFELONG LEARNERS",
      content: "The design world is constantly evolving, and so are we. We stay current with trends, technologies, and techniques to bring you the most innovative and relevant solutions. Our commitment to learning ensures you always receive cutting-edge design."
    },
    {
      title: "THERE IS NO I IN TEAM",
      content: "Collaboration is key to our success. We work seamlessly with you, our designers, architects, and artisans to create spaces that exceed expectations. Together, we transform your vision into reality through collective expertise and shared passion."
    }
  ];

  return (
    <div className="about-container">
      {/* Section 1: How We Work */}
      <section className="how-we-work-section">
        <div className="container">
          <div className="section-header">
            <h2>HOW WE WORK</h2>
          </div>

          {/* Step 01 */}
          <div className="work-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Understanding Your Vision</h3>
              <p>
                Every project begins with listening. Sakshi Jadhav takes time to understand your
                 lifestyle, preferences, and the way you use your space. This ensures that the design
                  direction is aligned with your needs and feels truly yours.
              </p>
            </div>
            <div className="step-image">
              <div className="image-grid">
                <div className="grid-item large">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" alt="Living room design" />
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=200&fit=crop" alt="Bedroom design" />
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300&h=200&fit=crop" alt="Bedroom detail" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="work-step reverse">
            <div className="step-number">02</div>
            <div className="step-image">
              <div className="image-single">
                <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop" alt="Designer consultation" />
              </div>
            </div>
            <div className="step-content">
              <h3>Designing with Purpose. </h3>
              <p>
               Concepts are developed with careful attention to layout planning, material selection, and visual harmony. 
               Each design decision is guided by comfort, usability, and understated luxury rather than trends alone.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="work-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Thoughtful execution.</h3>
              <p>
                From design development to final styling, SJ Interior Studio ensures every detail
                 is executed with precision. Close coordination and quality control help deliver
                  a seamless and stress-free experience.
              </p>
            </div>
            <div className="step-image">
              <div className="image-grid">
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop" alt="Living room with view" />
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop" alt="Bedroom design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Promise */}
      <section className="our-promise-section">
        <div className="container">
          <div className="promise-grid">
            <div className="promise-content">
              <h2>Our Promise to You</h2>
              <p>
               At SJ Interior Studio, transparency, clarity, and trust are at the heart 
               of every project. From the first consultation to the final handover,
                you are guided through each step with honest communication and clear expectations.

               Sakshi Jadhav personally oversees every design, ensuring consistency in 
               quality and attention to detail. The promise is simple — to create a home 
               that feels warm, functional, elegant, and uniquely yours.
              </p>
              <p>
                Our commitment to excellence guides every project, including when we're 
                collaborating with others. We work with the best in the industry – 
                architects, vendors, and artisans – because a project is only as good 
                as its people. Our team also draws inspiration from each property's 
                location and history, ensuring that we respect each space's unique 
                character and context.
              </p>
              <p>
                Rather than following a fixed style, we are guided by your personal 
                preferences and tastes. Ultimately, our goal is to deliver a home that 
                exceeds your wildest dreams.
              </p>
            </div>
            <div className="promise-image">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&h=700&fit=crop" alt="Designer at work" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="our-values-section">
        <div className="container">
          <div className="values-header">
            <h2>What It Means To Be A Designer.</h2>
            <p className="values-subtitle">These Are The Values We Stand For:</p>
          </div>

          <div className="accordion-container">
            <div className="accordion-grid">
              {/* Left Column */}
              <div className="accordion-column">
                {values.slice(0, 3).map((value, index) => (
                  <div 
                    key={index} 
                    className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                  >
                    <button 
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeAccordion === index}
                    >
                      <span className="accordion-icon">
                        {activeAccordion === index ? '−' : '+'}
                      </span>
                      <span className="accordion-title">{value.title}</span>
                    </button>
                    <div className="accordion-content">
                      <div className="accordion-body">
                        <p>{value.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="accordion-column">
                {values.slice(3, 6).map((value, index) => (
                  <div 
                    key={index + 3} 
                    className={`accordion-item ${activeAccordion === index + 3 ? 'active' : ''}`}
                  >
                    <button 
                      className="accordion-header"
                      onClick={() => toggleAccordion(index + 3)}
                      aria-expanded={activeAccordion === index + 3}
                    >
                      <span className="accordion-icon">
                        {activeAccordion === index + 3 ? '−' : '+'}
                      </span>
                      <span className="accordion-title">{value.title}</span>
                    </button>
                    <div className="accordion-content">
                      <div className="accordion-body">
                        <p>{value.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;