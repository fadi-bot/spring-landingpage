import React from 'react';
import './Products.css';

// Product and service categories from your company profile
const categories = [
  {
    name: 'Construction & Building Materials',
    items: [
      'Cement, steel bars, and iron structures',
      'Plumbing and piping systems',
      'Sanitary fittings, tiles, and fixtures',
      'Paints, sealants, adhesives',
      'Aluminum, wood, and glass materials'
    ]
  },
  {
    name: 'Office & Commercial Supplies',
    items: [
      'Office furniture and modular fittings',
      'Stationery, paper products, and packaging',
      'Cleaning, hygiene, and janitorial supplies',
      'Kitchen and pantry equipment',
      'IT peripherals and electronics'
    ]
  },
  {
    name: 'Electrical & Power Solutions',
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
    items: [
      'Packaged food, snacks, and beverages',
      'Health and hygiene products',
      'Cleaning agents and toiletries',
      'General grocery and imported items'
    ]
  },
  {
    name: 'Custom Procurement & Sourcing',
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
    <section className="products-section">
      <div className="products-container">
        <h1 className="products-title">Our Products & Services</h1>
        <p className="products-subtitle">
          We provide a comprehensive range of products to meet the diverse needs of our clients across various sectors.
        </p>
        <div className="category-grid">
          {categories.map(category => (
            <div key={category.name} className="category-card">
              <h3 className="category-name">{category.name}</h3>
              <ul className="product-list">
                {category.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;