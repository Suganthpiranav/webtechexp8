import React from "react";
import { Link } from "react-router-dom";
import { Bookmark, Trash2, ArrowLeft, BookOpen, Layers } from "lucide-react";
import { useNews } from "../context/NewsContext";
import NewsCard from "../components/NewsCard";

const Favorites = () => {
  const { bookmarkedArticles, clearBookmarks } = useNews();

  const handleClear = () => {
    if (window.confirm("Are you sure you want to remove all saved articles from your bookmarks?")) {
      clearBookmarks();
    }
  };

  return (
    <div className="favorites-page">
      <div className="container">
        {/* Header Bar */}
        <div className="favorites-header">
          <div className="favorites-title-wrap">
            <div className="favorites-icon-box">
              <Bookmark size={26} fill="currentColor" />
            </div>
            <div>
              <h1 style={{ fontSize: "1.85rem", fontWeight: "800", color: "var(--text-primary)" }}>
                Bookmarked Articles
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {bookmarkedArticles.length} {bookmarkedArticles.length === 1 ? "story" : "stories"} saved in your local library
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link to="/" className="btn-back">
              <ArrowLeft size={16} />
              <span>Back to News</span>
            </Link>

            {bookmarkedArticles.length > 0 && (
              <button
                type="button"
                className="btn-clear-favorites"
                onClick={handleClear}
                title="Remove all articles from bookmarks"
                id="clear-all-favorites-btn"
              >
                <Trash2 size={16} />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {/* Content: Grid or Empty State */}
        {bookmarkedArticles.length > 0 ? (
          <div className="news-grid">
            {bookmarkedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="no-results-box" style={{ maxWidth: 560, margin: "4rem auto" }}>
            <div 
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "var(--bg-accent-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
                color: "var(--primary-600)"
              }}
            >
              <BookOpen size={36} />
            </div>
            <h2 className="no-results-title">No Saved Articles Yet</h2>
            <p className="no-results-desc">
              You haven't bookmarked any technology news articles. Click the bookmark ribbon icon on any news card to save it for reading anytime.
            </p>
            <Link 
              to="/" 
              className="btn-read-more" 
              style={{
                backgroundColor: "var(--primary-600)",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                margin: "0 auto",
                display: "inline-flex"
              }}
            >
              <span>Explore Tech News</span>
              <Layers size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
