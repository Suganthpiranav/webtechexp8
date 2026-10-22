import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="container" style={{ padding: "6rem 1rem", textAlign: "center" }}>
      <div className="no-results-box" style={{ maxWidth: 540 }}>
        <AlertTriangle size={64} color="#f59e0b" style={{ margin: "0 auto 1.25rem auto" }} />
        <h1 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          404 - Page Not Found
        </h1>
        <p className="no-results-desc">
          The requested page could not be found. Please check the URL or return to the tech news homepage.
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
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          <Home size={18} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
