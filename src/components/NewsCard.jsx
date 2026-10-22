import React from "react";
import { Link } from "react-router-dom";
import { Bookmark, Clock, Calendar, ArrowRight } from "lucide-react";
import { useNews } from "../context/NewsContext";
import { getCategoryMeta } from "../utils/categoryMeta";

const NewsCard = ({ article }) => {
  const { toggleBookmark, isBookmarked } = useNews();
  const bookmarked = isBookmarked(article.id);
  const catMeta = getCategoryMeta(article.category);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.id);
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <article className="news-card">
      {/* Article Image & Floating Bookmark Button */}
      <div className="news-card-image-wrap">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="news-card-img"
          loading="lazy"
          onError={handleImageError}
        />
        <button
          className={`bookmark-floating-btn ${bookmarked ? "active" : ""}`}
          onClick={handleBookmarkClick}
          title={bookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Bookmark 
            size={18} 
            fill={bookmarked ? "#eab308" : "none"} 
            stroke={bookmarked ? "#ca8a04" : "currentColor"} 
          />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="news-card-body">
        {/* Meta Header: Category Badge + Sample/Live Indicator */}
        <div className="news-card-meta">
          <span className={`category-badge ${catMeta.className}`}>
            {catMeta.icon}
            {article.category}
          </span>
          {article.isSample ? (
            <span className="badge-pill-sample" title="Curated Lab Article">Sample</span>
          ) : (
            <span className="badge-pill-live" title="Fetched Live from API">Live API</span>
          )}
        </div>

        {/* Title */}
        <Link to={`/news/${article.id}`}>
          <h3 className="news-card-title">{article.title}</h3>
        </Link>

        {/* Short Description */}
        <p className="news-card-desc">{article.shortDescription}</p>

        {/* Date and Reading Time */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <Calendar size={13} />
            {article.publishedDate}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <Clock size={13} />
            {article.readTime || "4 min read"}
          </span>
        </div>

        {/* Footer with Source & Read More Link */}
        <div className="news-card-footer">
          <span className="news-card-source" title={`Published by ${article.source}`}>
            {article.source}
          </span>

          <Link to={`/news/${article.id}`} className="btn-read-more">
            <span>Read More</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
