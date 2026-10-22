import React from "react";
import { Search, X, RotateCcw } from "lucide-react";
import { useNews } from "../context/NewsContext";
import { CATEGORIES } from "../data/newsData";

const SearchBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    resetFilters,
    filteredArticles,
    articles
  } = useNews();

  const isFiltered = searchQuery.trim() !== "" || selectedCategory !== "All" || sortBy !== "newest";

  return (
    <div className="filter-section">
      <div className="search-filter-card">
        {/* Top Row: Search Input + Category Dropdown + Sort + Reset */}
        <div className="search-bar-row">
          {/* Search Input */}
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search news by headline, keywords, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="news-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                title="Clear search"
                aria-label="Clear search input"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Dropdown Filter */}
          <div className="filter-dropdowns">
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <select
                className="custom-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                id="category-dropdown-filter"
                aria-label="Filter by category"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <select
              className="custom-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              id="sort-dropdown"
              aria-label="Sort news articles"
            >
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
              <option value="title">Sort: Title (A-Z)</option>
            </select>

            {/* Reset Filters Button */}
            {isFiltered && (
              <button
                type="button"
                className="btn-reset-filters"
                onClick={resetFilters}
                title="Reset all search and category filters"
                id="reset-filters-btn"
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Quick Pills */}
        <div className="category-pills-row" role="tablist" aria-label="Quick Category Filter">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Current Filter Context */}
      <div className="results-meta-bar">
        <span>
          Showing <strong>{filteredArticles.length}</strong> of {articles.length} technology stories
          {selectedCategory !== "All" && (
            <span> in <em>{selectedCategory}</em></span>
          )}
          {searchQuery.trim() && (
            <span> matching "<em>{searchQuery}</em>"</span>
          )}
        </span>

        {isFiltered && (
          <span style={{ fontSize: "0.82rem", color: "var(--primary-600)" }}>
            Filters Active
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
