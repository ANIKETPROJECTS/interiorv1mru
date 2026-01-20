import React from 'react';
import '../styles/pages/DesignServices.css';

const servicesData = {
  'materials-selection': {
    title: 'Curated Materials & Fabrication',
    description: 'The foundation of every great design lies in the quality and character of its materials. Sakshi Jadhav personally source and inspects every slab of marble, cut of timber, and weave of textile to ensure it meets our studio\'s exacting standards for durability and aesthetic depth.',
    features: [
      'Personal sourcing from global vendors',
      'In-house fabrication oversight',
      'Sustainability-focused material selection',
      'Detailed quality assurance testing'
    ],
    image: '/stock_images/luxury_modern_kitche_c58c5c03.jpg',
    palette: [
      {
        category: 'Wood & Timbers',
        items: [
          { name: 'Solid Walnut', label: 'Rich, durable hardwood with natural grain beauty.', image: 'stock_images/luxury_modern_living_e3459d3b.jpg' },
          { name: 'Hand-Carved Oak', label: 'Bespoke artisanal panels for feature walls.', image: 'stock_images/luxury_modern_living_af5894f6.jpg' },
          { name: 'CNC-Crafted Birch', label: 'Precision-engineered decorative elements.', image: 'stock_images/luxury_modern_living_9dd2eb17.jpg' }
        ]
      },
      {
        category: 'Stones & Surfaces',
        items: [
          { name: 'Calacatta Marble', label: 'Premium Italian stone with elegant veining.', image: 'stock_images/luxury_modern_kitche_c58c5c03.jpg' },
          { name: 'Brushed Granite', label: 'Sophisticated matte finish for high-traffic areas.', image: 'stock_images/luxury_modern_kitche_f98a402e.jpg' },
          { name: 'Terrazzo Mosaic', label: 'Artisanal stone composite with depth and character.', image: 'stock_images/luxury_modern_kitche_bb2c5729.jpg' }
        ]
      },
      {
        category: 'Textiles & Finishes',
        items: [
          { name: 'Belgian Linen', label: 'Hand-selected organic upholstery for softness.', image: 'stock_images/luxury_modern_dining_98e63b23.jpg' },
          { name: 'Silk-Velvet Blend', label: 'Luxurious textures for bespoke cushioning.', image: 'stock_images/luxury_modern_dining_998080bd.jpg' },
          { name: 'Fluted Glass', label: 'Contemporary finishes for cabinetry and screens.', image: 'stock_images/luxury_modern_dining_2d631e89.jpg' }
        ]
      }
    ]
  },
  'custom-furniture': {
    title: 'Bespoke Custom Furniture Design',
    description: 'When standard pieces won\'t suffice, we design custom furniture that perfectly fits your space and lifestyle. From initial sketches to final assembly, our designer oversees the entire craftsmanship process to create heirloom-quality pieces.',
    features: [
      'Ergonomic and spatial optimization',
      'Hand-selected timber and veneers',
      'Bespoke upholstery and hardware',
      'Unique design language for your home'
    ],
    image: '/stock_images/luxury_modern_living_e3459d3b.jpg'
  },
  'finishes-textures': {
    title: 'Artisanal Finishes & Color Theory',
    description: 'Our color and texture selections are not just about aesthetics; they define the emotional atmosphere of your home. Sakshi hand-mixes palettes and selects finishes that interact beautifully with both natural and artificial light.',
    features: [
      'Custom-mixed color palettes',
      'Layered tactile textures',
      'High-performance technical finishes',
      'Mood-board driven spatial design'
    ],
    image: '/stock_images/luxury_modern_dining_98e63b23.jpg'
  }
};

const DesignServices = ({ type }) => {
  const data = servicesData[type] || servicesData['materials-selection'];

  return (
    <div className="services-detail-page">
      <div className="services-detail-container">
        <div className="services-detail-content">
          <div className="services-detail-text">
            <span className="services-detail-label">DESIGN SERVICES</span>
            <h1 className="services-detail-title">{data.title}</h1>
            <p className="services-detail-description">{data.description}</p>
            <ul className="services-detail-list">
              {data.features.map((feature, index) => (
                <li key={index} className="services-detail-item">
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="designer-note">
              <strong>Designer's Personal Touch:</strong> Every element in this collection is personally hand-selected, customized, and approved by Sakshi Jadhav to ensure it aligns perfectly with your vision.
            </div>
          </div>
          <div className="services-detail-image">
            <img src={data.image} alt={data.title} />
          </div>
        </div>

        {data.palette && (
          <div className="materials-palette-section">
            <div className="palette-header">
              <h2 className="palette-title">Material Palette & Craft Library</h2>
              <p className="palette-subtitle">A curated exploration of our studio's material language and artisanal expertise.</p>
            </div>
            
            <div className="palette-grid">
              {data.palette.map((category, catIndex) => (
                <div key={catIndex} className="palette-category">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="category-items">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="palette-item">
                        <div className="item-image-wrapper">
                          <img src={`/${item.image}`} alt={item.name} />
                          <div className="item-overlay">
                            <span className="item-tag">Hand-Selected</span>
                          </div>
                        </div>
                        <div className="item-details">
                          <h4 className="item-name">{item.name}</h4>
                          <p className="item-label">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignServices;
