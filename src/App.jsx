import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NewsProvider } from "./context/NewsContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <div className="app-layout">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news/:id" element={<NewsDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Toast />
          </div>
        </Router>
      </NewsProvider>
    </ThemeProvider>
  );
}

export default App;
