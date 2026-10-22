import React from "react";
import { Link } from "react-router-dom";
import { 
  Flame, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Bookmark 
} from "lucide-react";
import { useNews } from "../context/NewsContext";
import { getCategoryMeta } from "../utils/categoryMeta";

const FeaturedNews = ({ article }) => {
  const { toggleBookmark, isBookmarked } = useNews();
  if (!article) return null;

  const bookmarked = isBookmarked(article.id);
  const catMeta = getCategoryMeta(article.category);

  return (
    <section className="featured-section">
      <div className="section-header">
        <h2 className="section-title">
          <Flame size={22} color="#dc2626" />
          <span>Latest Top Story</span>
        </h2>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Featured Editorial Pick
        </span>
      </div>

      <div className="featured-card">
        {/* Left Side: Image */}
        <div className="featured-image-wrapper">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="featured-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
            }}
          />
        </div>

        {/* Right Side: Editorial Content */}
        <div className="featured-content">
          <div>
            <div className="featured-meta">
              <span className={`category-badge ${catMeta.className}`}>
                {catMeta.icon}
                {article.category}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                <Calendar size={13} />
                {article.publishedDate}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                <Clock size={13} />
                {article.readTime}
              </span>
              {article.isSample && (
                <span className="badge-pill-sample">Curated</span>
              )}
            </div>

            <Link to={`/news/${article.id}`}>
              <h3 className="featured-title">{article.title}</h3>
            </Link>

            <p className="featured-excerpt">{article.shortDescription}</p>
          </div>

          <div className="featured-footer">
            <div>
              <p style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--text-primary)" }}>
                {article.author}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                Source: {article.source}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                className={`icon-button ${bookmarked ? "active" : ""}`}
                onClick={() => toggleBookmark(article.id)}
                title={bookmarked ? "Remove bookmark" : "Add to bookmarks"}
                style={{ color: bookmarked ? "#eab308" : undefined }}
              >
                <Bookmark size={18} fill={bookmarked ? "#eab308" : "none"} stroke={bookmarked ? "#ca8a04" : "currentColor"} />
              </button>

              <Link 
                to={`/news/${article.id}`} 
                className="btn-read-more"
                style={{
                  backgroundColor: "var(--primary-600)",
                  color: "#ffffff",
                  padding: "0.6rem 1.15rem",
                  borderRadius: "var(--radius-full)"
                }}
              >
                <span>Read Full Story</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
