import React from 'react';
import './Products.css';

// Importing images from assets (Make sure these files exist in your assets folder)
// If you don't have these specific files yet, the browser will show alt text.
import ppeImg from '../assets/about-image.jpg'; // Using existing asset as example
import electricalImg from '../assets/electrical.png'; // Using existing asset as example
import industrialImg from '../assets/industrial.png'; 
import fmcgImg from '../assets/fmcg.png';
import sourcingImg from '../assets/sourcing.png';

const categories = [
  {
    name: 'Personal Protective Equipment (PPE)',
    image: ppeImg,
    items: [
      'Safety Shoes - Impact- and slip-resistant footwear',
      'Safety Gloves - For grip and protection against cuts, chemicals, and heat',
      'Safety Helmets - High-strength head protection',
      'Reflective Safety Jackets - High-visibility gear for all conditions',
      'Magnifiers & Inspection Tools - Precision tools for accuracy'
    ]
  },
  {
    name: 'Electrical & Power Solutions',
    image: electricalImg,
    items: [
      'Power cables, wiring, and conduits',
      'LED lights, panels, and accessories',
      'Switchboards, sockets, and circuit protection systems',
      'UPS systems, batteries, and inverters',
      'General household and commercial electronics'
    ]
  },
  {
    name: 'Industrial & Engineering Solutions',
    image: industrialImg,
    items: [
      'Precision tools and hardware',
      'Machinery parts and spares',
      'Electrical and mechanical components',
      'Industrial-grade lubricants and chemicals',
      'Welding consumables and safety equipment'
    ]
  },
  {
    name: 'FMCG & Consumer Goods',
    image: fmcgImg,
    items: [
      'Packaged food, snacks, and beverages',
      'Health and hygiene products',
      'Cleaning agents and toiletries',
      'General grocery and imported items'
    ]
  },
  {
    name: 'Custom Procurement & Sourcing',
    image: sourcingImg,
    items: [
      'Bulk sourcing for government or corporate tenders',
      'End-to-end vendor and supply chain management',
      'Import coordination and product localization',
      'Specialized sourcing for niche sectors'
    ]
  }
];

function Products() {
  return (
    <section className="products-section bg-light">
      <div className="products-container">
        <h1 className="products-title">Our Products & Services</h1>
        <p className="products-subtitle">
          We provide a comprehensive range of products to meet the diverse needs of our clients across various sectors.
        </p>
        <div className="category-grid">
          {categories.map(category => (
            <div key={category.name} className="category-card" data-aos="fade-up">
              {/* NEW: Image Section */}
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <ul className="product-list">
                  {category.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;