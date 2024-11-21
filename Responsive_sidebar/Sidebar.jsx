import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
    
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h1 className="sidebar-title">My Sidebar</h1>
      <nav>
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Main Content */}
    <div className="main-content ">
      <header>
        <button  className={`menu-btn ${isOpen ? "right_shift":"left_shift"}`} onClick={toggleSidebar}>
          ☰
        </button>
        <h1>My Website</h1>
      </header>

      <main>
        <h2>Welcome!</h2>
        <p>This is the main content area.</p>
      </main>

    </div>
  </div>
  )
}

export default Sidebar
