import React, { createContext, useState, useEffect, useMemo } from "react";
import { SAMPLE_NEWS } from "../data/newsData";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  // Articles state initialized with curated sample news
  const [articles, setArticles] = useState(SAMPLE_NEWS);
  
  // Bookmarked article IDs stored in localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("tech_news_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load bookmarks from localStorage", e);
      return [];
    }
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest"); // "newest", "oldest", "title"

  // Live API states
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [isLiveFeedActive, setIsLiveFeedActive] = useState(false);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState(null);

  // Persist bookmarks whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("tech_news_bookmarks", JSON.stringify(bookmarks));
    } catch (e) {
      console.error("Failed to save bookmarks to localStorage", e);
    }
  }, [bookmarks]);

  // Show toast notification for 3 seconds
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle bookmark
  const toggleBookmark = (articleId) => {
    setBookmarks((prev) => {
      const exists = prev.includes(articleId);
      if (exists) {
        showToast("Removed from bookmarks");
        return prev.filter((id) => id !== articleId);
      } else {
        showToast("Article saved to bookmarks!");
        return [...prev, articleId];
      }
    });
  };

  const isBookmarked = (articleId) => bookmarks.includes(articleId);

  const clearBookmarks = () => {
    setBookmarks([]);
    showToast("All bookmarks cleared");
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("newest");
  };

  // Fetch live news from external API (if configured in .env)
  const fetchLiveNews = async () => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    setIsLoading(true);
    setApiError(null);

    if (!apiKey) {
      // Graceful fallback when no API key is provided
      setTimeout(() => {
        setIsLoading(false);
        setApiError(
          "No VITE_NEWS_API_KEY found in environment variables. Falling back smoothly to curated Lab Sample News."
        );
        setArticles(SAMPLE_NEWS);
        setIsLiveFeedActive(false);
        showToast("Using curated sample news (add VITE_NEWS_API_KEY in .env for live API)");
      }, 700);
      return;
    }

    try {
      // Fetch live technology news
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=15&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        const mappedArticles = data.articles
          .filter((art) => art.title && art.title !== "[Removed]")
          .map((art, index) => ({
            id: `live-${index}-${encodeURIComponent(art.title.slice(0, 20).toLowerCase().replace(/[^a-z0-9]/g, "-"))}`,
            title: art.title,
            category: "Technology",
            shortDescription: art.description || "Click read more to view full live news coverage.",
            fullContent: `${art.content || art.description || "Full coverage available on the original news source."}\n\nThis article was retrieved live via NewsAPI. You can follow the complete reporting directly on the publication's official website using the source link.`,
            source: art.source?.name || "Verified Live Source",
            author: art.author || "Tech News Desk",
            publishedDate: art.publishedAt
              ? new Date(art.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })
              : "Recent",
            readTime: "4 min read",
            imageUrl: art.urlToImage || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
            url: art.url || "#",
            tags: ["Live News", "Technology"],
            isFeatured: index === 0,
            isSample: false
          }));

        setArticles(mappedArticles);
        setIsLiveFeedActive(true);
        showToast("Live technology news feed loaded!");
      } else {
        throw new Error("No live technology articles found in response");
      }
    } catch (err) {
      console.warn("Live news fetch failed, falling back to sample data:", err);
      setApiError(`Live API Notice: ${err.message}. Seamlessly displaying verified sample news.`);
      setArticles(SAMPLE_NEWS);
      setIsLiveFeedActive(false);
    } finally {
      setIsLoading(false);
    }
  };

  const loadSampleNews = () => {
    setIsLoading(true);
    setTimeout(() => {
      setArticles(SAMPLE_NEWS);
      setIsLiveFeedActive(false);
      setApiError(null);
      setIsLoading(false);
      showToast("Switched to Curated Sample News");
    }, 300);
  };

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        // Category filter
        const matchesCategory =
          selectedCategory === "All" ||
          article.category.toLowerCase() === selectedCategory.toLowerCase();

        // Search query filter (title and description)
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          article.title.toLowerCase().includes(q) ||
          article.shortDescription.toLowerCase().includes(q) ||
          (article.tags && article.tags.some((t) => t.toLowerCase().includes(q)));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        // By default or "newest": compare published dates or keep order
        if (sortBy === "oldest") {
          return new Date(a.publishedDate || 0) - new Date(b.publishedDate || 0);
        }
        return new Date(b.publishedDate || 0) - new Date(a.publishedDate || 0);
      });
  }, [articles, selectedCategory, searchQuery, sortBy]);

  // Bookmarked articles list
  const bookmarkedArticles = useMemo(() => {
    return articles.filter((article) => bookmarks.includes(article.id));
  }, [articles, bookmarks]);

  return (
    <NewsContext.Provider
      value={{
        articles,
        filteredArticles,
        bookmarkedArticles,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        clearBookmarks,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        resetFilters,
        isLoading,
        apiError,
        isLiveFeedActive,
        fetchLiveNews,
        loadSampleNews,
        toastMessage,
        showToast
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { useNews } from "./useNews";
