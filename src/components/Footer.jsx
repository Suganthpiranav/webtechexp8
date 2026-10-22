import React from "react";
import { Link } from "react-router-dom";
import { Zap, Code2, Heart } from "lucide-react";
import { CATEGORIES } from "../data/newsData";
import { useNews } from "../context/NewsContext";

const CURRENT_YEAR = 2026;

const Footer = () => {
  const { setSelectedCategory } = useNews();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About & Lab Project */}
          <div className="footer-col-about">
            <div className="footer-brand">
              <div className="brand-icon-wrapper" style={{ width: 34, height: 34 }}>
                <Zap size={18} fill="currentColor" />
              </div>
              <span>Tech News Aggregator</span>
            </div>
            <p className="footer-text">
              A comprehensive single-page technology news platform developed for the Web Technology Lab (Experiment 8). Built using modern ReactJS, functional components, custom hooks, and React Router DOM.
            </p>
            <div className="footer-badge-pill">
              <Code2 size={14} />
              <span>Web Technology Lab - Exp 8</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">Home News Feed</Link>
              </li>
              <li>
                <Link to="/favorites" className="footer-link">Bookmarked Articles</Link>
              </li>
              <li>
                <a href="#news-search-input" className="footer-link">Search & Filter</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology Categories */}
          <div>
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links-list">
              {CATEGORIES.filter((c) => c !== "All").map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategoryClick(cat)}
                    className="footer-link"
                    style={{ textAlign: "left" }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tech Stack */}
          <div>
            <h4 className="footer-heading">Tech Stack</h4>
            <div className="tech-stack-badges">
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">React Router DOM</span>
              <span className="tech-tag">Vanilla CSS</span>
              <span className="tech-tag">Lucide Icons</span>
              <span className="tech-tag">localStorage</span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "1rem" }}>
              Responsive on Mobile, Tablet & Desktop devices.
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {CURRENT_YEAR} <strong>Tech News Aggregator</strong>. All rights reserved. Web Technology Lab Project.
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span>Crafted for Web Tech Lab with</span>
            <Heart size={14} fill="#ef4444" color="#ef4444" />
            <span>in React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
