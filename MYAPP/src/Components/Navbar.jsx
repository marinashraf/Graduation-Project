import React, { useState } from "react";
import "../assets/Navbar.css";



export default function Navbar({ toggleSidebar, toggleTheme, darkMode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="logo">ELITE</div>

      <div className="nav-items">
        <div className="search-wrapper">
          <button className="icon-btn" title="Search" onClick={toggleSearch}>
            <i className="fa-solid fa-search"></i>
          </button>

          {searchOpen && (
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
        </div>

        <button className="icon-btn" title="Notifications">
          <i className="fa-solid fa-bell"></i>
        </button>

        <button className="btn-theme" onClick={toggleTheme}>
          {darkMode ? "Light" : "Dark"}
        </button>

        <button className="btn-logout">Logout</button>

        <button className="btn-menu" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
