import React from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Layers, 
  SearchX, 
  TrendingUp, 
  RefreshCw
} from "lucide-react";
import { useNews } from "../context/NewsContext";
import NewsCard from "../components/NewsCard";
import FeaturedNews from "../components/FeaturedNews";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { 
    filteredArticles, 
    articles, 
    resetFilters, 
    searchQuery, 
    selectedCategory, 
    isLoading,
    apiError
  } = useNews();

  // Pick top featured story (only show on default view when not actively filtering by query)
  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];
  const isFiltering = searchQuery.trim() !== "" || selectedCategory !== "All";

  // Filter out the featured article from the main grid if we are displaying it separately
  const displayArticles = isFiltering
    ? filteredArticles
    : filteredArticles.filter((a) => a.id !== featuredArticle?.id);

  return (
    <div className="home-page">
      {/* Breaking News Ticker */}
      <div className="breaking-ticker">
        <div className="container ticker-container">
          <span className="ticker-tag">
            <TrendingUp size={13} />
            Trending Tech
          </span>
          <Link to={`/news/${featuredArticle?.id}`} className="ticker-headline">
            {featuredArticle?.title}
          </Link>
        </div>
      </div>

      {/* Hero Welcome Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Web Technology Lab &bull; React News Portal</span>
          </div>

          <h1 className="hero-title">
            Stay Ahead with the Latest in <br />
            <span className="hero-gradient-text">Modern Technology & Engineering</span>
          </h1>

          <p className="hero-description">
            Curated reporting across Artificial Intelligence, Cybersecurity, Cloud Infrastructure, Web Development, and Next-Gen Computing. Fast, interactive, and built with ReactJS.
          </p>

          {/* Quick Statistics Row */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">{articles.length}+</span>
              <span className="stat-label">Verified Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Core Tech Domains</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client-Side Reactive</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container">
        {/* API Error Notification if any */}
        {apiError && (
          <div style={{
            backgroundColor: "var(--bg-accent-subtle)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-md)",
            padding: "0.85rem 1.25rem",
            margin: "1.5rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.88rem",
            color: "var(--text-secondary)"
          }}>
            <span>{apiError}</span>
            <button 
              className="btn-read-more" 
              onClick={resetFilters} 
              style={{ fontSize: "0.82rem" }}
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Search and Category Filter Toolbar */}
        <SearchBar />

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="loading-wrapper">
            <div className="spinner"></div>
            <p style={{ fontWeight: 600, color: "var(--text-muted)" }}>
              Retrieving latest technology news feed...
            </p>
          </div>
        ) : (
          <>
            {/* Featured Top Story (Only displayed when not searching/filtering) */}
            {!isFiltering && featuredArticle && (
              <FeaturedNews article={featuredArticle} />
            )}

            {/* News Grid Section */}
            <section className="news-grid-section">
              <div className="section-header">
                <h2 className="section-title">
                  <Layers size={22} color="var(--primary-600)" />
                  <span>
                    {isFiltering ? "Matching Technology Stories" : "Latest Tech Headlines"}
                  </span>
                </h2>
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                  {displayArticles.length} {displayArticles.length === 1 ? "article" : "articles"} found
                </span>
              </div>

              {/* Conditional Rendering: Articles Grid or Empty State */}
              {displayArticles.length > 0 ? (
                <div className="news-grid">
                  {displayArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                /* No matching news empty state */
                <div className="no-results-box">
                  <SearchX className="no-results-icon" />
                  <h3 className="no-results-title">No Matching Stories Found</h3>
                  <p className="no-results-desc">
                    We couldn't find any news articles matching your search query "
                    <strong>{searchQuery}</strong>" in the selected category.
                  </p>
                  <button
                    type="button"
                    className="btn-reset-filters"
                    onClick={resetFilters}
                    style={{ margin: "0 auto" }}
                  >
                    <RefreshCw size={16} />
                    <span>Clear Search & Reset Filters</span>
                  </button>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
