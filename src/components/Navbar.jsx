import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Zap, 
  Bookmark, 
  Sun, 
  Moon, 
  Radio, 
  Menu, 
  X,
  Sparkles
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useNews } from "../context/NewsContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { bookmarks, isLiveFeedActive, fetchLiveNews, loadSampleNews, isLoading } = useNews();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          {/* Logo / Brand */}
          <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon-wrapper">
              <Zap size={22} fill="currentColor" />
            </div>
            <span>
              Tech News <span className="brand-title-accent">Aggregator</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar-links" style={{ display: mobileMenuOpen ? "flex" : undefined }}>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/favorites" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Bookmark size={17} />
              <span>Bookmarks</span>
              {bookmarks.length > 0 && (
                <span className="bookmark-counter-badge">{bookmarks.length}</span>
              )}
            </NavLink>
          </nav>

          {/* Action Buttons: Live Feed Status, Theme Toggle, Mobile Menu */}
          <div className="navbar-actions">
            {/* Live Feed Toggle / Indicator */}
            <button
              onClick={() => setShowLiveModal(true)}
              className={`live-feed-toggle-btn ${isLiveFeedActive ? "active" : ""}`}
              title="Click to check Live API status / toggle source"
            >
              <span className="status-dot"></span>
              <Radio size={15} />
              <span style={{ display: "none", "@media (min-width: 640px)": { display: "inline" } }}>
                {isLiveFeedActive ? "Live API Feed" : "Curated Sample Feed"}
              </span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="icon-button"
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className="icon-button mobile-nav-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              style={{ display: "none" }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Live Feed API Status / Modal */}
      {showLiveModal && (
        <div className="modal-overlay" onClick={() => setShowLiveModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Sparkles size={20} color="var(--primary-600)" />
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Feed Source & API Info</h3>
              </div>
              <button 
                className="modal-close-btn"
                onClick={() => setShowLiveModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.25rem", lineHeight: "1.6" }}>
              This Tech News Aggregator includes <strong>12 curated, full-content sample articles</strong> across AI, Cybersecurity, Cloud, Web Dev, and Technology.
            </p>

            <div style={{ 
              backgroundColor: "var(--bg-accent-subtle)", 
              padding: "1rem", 
              borderRadius: "var(--radius-md)", 
              border: "1px solid var(--border-subtle)",
              marginBottom: "1.5rem",
              fontSize: "0.88rem"
            }}>
              <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                Current Status: {isLiveFeedActive ? "🟢 Connected to Live News API" : "🔵 Using Curated Lab Sample Data"}
              </p>
              <p style={{ color: "var(--text-muted)" }}>
                To connect a live News API, set <code>VITE_NEWS_API_KEY</code> in your <code>.env</code> file. Without an API key, the app gracefully falls back to verified sample data.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
              {isLiveFeedActive ? (
                <button
                  className="btn-back"
                  onClick={() => {
                    loadSampleNews();
                    setShowLiveModal(false);
                  }}
                  disabled={isLoading}
                >
                  Switch to Sample News
                </button>
              ) : (
                <button
                  className="btn-read-more"
                  style={{
                    backgroundColor: "var(--primary-600)",
                    color: "#fff",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "var(--radius-full)"
                  }}
                  onClick={() => {
                    fetchLiveNews();
                    setShowLiveModal(false);
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Fetching Live..." : "Try Live News API"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
