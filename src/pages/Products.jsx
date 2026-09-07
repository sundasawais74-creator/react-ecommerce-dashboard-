import React from 'react';

const products = [
  { id: 1, tag: "REACT + FRONTEND", title: "E-Commerce Store", desc: "A clean shopping experience with product cards, search and cart-ready UI.", icon: "🛍️" },
  { id: 2, tag: "REACT + BUSINESS", title: "Creative Agency", desc: "Modern agency landing page designed to convert visitors into clients.", icon: "✨" },
  { id: 3, tag: "REACT + ADMIN", title: "Dashboard UI", desc: "Responsive dashboard concept with cards, analytics and reusable components.", icon: "📊" },
  { id: 4, tag: "UI + DESIGN", title: "Landing Pages", desc: "Fast, focused landing pages designed to present your service and drive action.", icon: "🚀" },
];

const Products = () => {
  return (
    <div className="pro-container">
      <div className="pro-top">
        <div>
          <p className="pro-small">03 — SELECTED WORK</p>
          <h1>Recent <span>products.</span></h1>
        </div>
        <p className="pro-side-text">A few concepts showing the kind of work I can create for clients.</p>
      </div>

      <div className="pro-grid">
        {products.map(p => (
          <div key={p.id} className="pro-card">
            <p className="pro-tag">{p.tag}</p>
            <div className="pro-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p className="pro-desc">{p.desc}</p>
            <a href="#" className="pro-link">View project →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;