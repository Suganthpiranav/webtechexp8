import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Bookmark, 
  Calendar, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Share2, 
  AlertCircle,
  Sparkles,
  Layers
} from "lucide-react";
import { useNews } from "../context/NewsContext";
import { getCategoryMeta } from "../utils/categoryMeta";
import NewsCard from "../components/NewsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles, toggleBookmark, isBookmarked, showToast } = useNews();

  // Scroll to top when opening an article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Find article matching id
  const article = articles.find((item) => item.id === id);

  // Handle invalid news ID gracefully
  if (!article) {
    return (
      <main className="container" style={{ padding: "5rem 1rem", textAlign: "center" }}>
        <div className="no-results-box" style={{ maxWidth: 620 }}>
          <AlertCircle size={64} color="#ef4444" style={{ margin: "0 auto 1.25rem auto" }} />
          <h2 className="no-results-title">Article Not Found</h2>
          <p className="no-results-desc">
            The article with identifier <code>"{id}"</code> could not be located. It may have been moved, expired, or the link is incorrect.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link to="/" className="btn-back">
              <ArrowLeft size={16} />
              <span>Back to Tech News</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const bookmarked = isBookmarked(article.id);
  const catMeta = getCategoryMeta(article.category);

  // Find related articles in the same category
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Article link copied to clipboard!");
    } else {
      showToast("URL copied");
    }
  };

  return (
    <article className="article-details-page">
      <div className="container">
        {/* Navigation & Action Header */}
        <div className="article-nav-bar">
          <button 
            type="button" 
            className="btn-back" 
            onClick={() => navigate(-1)}
            id="back-to-news-btn"
          >
            <ArrowLeft size={18} />
            <span>Back to News</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              type="button"
              className="icon-button"
              onClick={handleShare}
              title="Share article link"
              aria-label="Share article"
            >
              <Share2 size={18} />
            </button>

            <button
              type="button"
              className={`btn-bookmark-action ${bookmarked ? "bookmarked" : ""}`}
              onClick={() => toggleBookmark(article.id)}
              id="details-bookmark-btn"
            >
              <Bookmark 
                size={18} 
                fill={bookmarked ? "#eab308" : "none"} 
                stroke={bookmarked ? "#ca8a04" : "currentColor"} 
              />
              <span>{bookmarked ? "Saved to Favorites" : "Add to Favorites"}</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-header-meta">
            <span className={`category-badge ${catMeta.className}`}>
              {catMeta.icon}
              {article.category}
            </span>

            {article.isSample ? (
              <span className="badge-pill-sample">Curated Lab Article</span>
            ) : (
              <span className="badge-pill-live">Verified Live Feed</span>
            )}
          </div>

          <h1 className="article-headline">{article.title}</h1>

          {/* Author, Publication Source, & Date Bar */}
          <div className="article-author-row">
            <div className="author-info">
              <div className="author-avatar">
                {article.author ? article.author.charAt(0) : "T"}
              </div>
              <div>
                <p className="author-name">{article.author || "Tech News Desk"}</p>
                <p className="author-source">Publication: {article.source}</p>
              </div>
            </div>

            <div className="article-meta-tags">
              <span className="meta-icon-text">
                <Calendar size={16} />
                <span>{article.publishedDate}</span>
              </span>
              <span className="meta-icon-text">
                <Clock size={16} />
                <span>{article.readTime || "5 min read"}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="article-featured-image-wrapper">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="article-featured-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
            }}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-body-wrapper">
          {/* Lead Excerpt */}
          <p className="article-excerpt-highlight">
            {article.shortDescription}
          </p>

          {/* Multi-paragraph Full Content */}
          <div className="article-content-text">
            {article.fullContent.split("\n\n").map((para, index) => {
              // Check if paragraph is the Key Takeaways section
              if (para.includes("Key Takeaways:")) {
                const lines = para.split("\n").filter((l) => l.trim() !== "");
                return (
                  <div key={index} className="article-key-takeaways">
                    <h3 className="takeaways-heading">
                      <Sparkles size={20} />
                      <span>Executive Key Takeaways</span>
                    </h3>
                    <ul>
                      {lines.slice(1).map((point, pIdx) => (
                        <li key={pIdx} style={{ listStyleType: "none", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                          <CheckCircle2 size={18} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                          <span>{point.replace(/^-\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              // Normal text paragraphs
              return (
                <p key={index}>{para}</p>
              );
            })}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div style={{ marginTop: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--text-muted)" }}>Related Tags:</span>
              {article.tags.map((tag) => (
                <span key={tag} className="tech-tag">#{tag}</span>
              ))}
            </div>
          )}

          {/* Publication Attribution Box */}
          <div className="article-source-box">
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                Originally Published by {article.source}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                Curated for academic demonstration in Web Technology Lab.
              </p>
            </div>

            <a
              href={article.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-external-link"
            >
              <span>Visit Official Source</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section style={{ marginTop: "4.5rem", paddingTop: "3rem", borderTop: "1px solid var(--border-subtle)" }}>
            <div className="section-header">
              <h2 className="section-title">
                <Layers size={22} color="var(--primary-600)" />
                <span>More in {article.category}</span>
              </h2>
            </div>
            <div className="news-grid">
              {relatedArticles.map((relArt) => (
                <NewsCard key={relArt.id} article={relArt} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default NewsDetails;
