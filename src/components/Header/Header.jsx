import React, { useState } from "react"; // Import useState
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return(
        <header class="header-container">
            {""}
            {/* for destop */}
            <div>
            <Link to="/" data-discover="true" class="college-name">Vivekanand College</Link>
            </div>
            <nav class="navbar desktop-nav">
                <Link to="/home" class="nav-item">Home  </Link>
                <Link to="/about" class="nav-item">About </Link>
                <Link to="/courses" class="nav-item">Courses </Link>
                <Link to="/contact" class="nav-item">Contact </Link>
                {/* <Link to="/notfound" class="nav-item">NotFound </Link>
                <Link to="/admission" class="nav-item" >Admission</Link> */}
                <button id="apply-btn" class="nav-item-btn">
                    <Link to="/admission" class="nav-item-btn">Apply Now!</Link>
                </button>
            </nav>

            {/* hamburger sign for mobile  */}
            <button className="hamburger-menu" onClick={toggleDrawer}>
                <span className="hamburger-icon">
                </span><span className="hamburger-icon">
                </span><span className="hamburger-icon">
                </span>
            </button>

            {/* options for mobile  */}
            <nav class="drawer-nav " className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
              
                <button className="close-drawer-btn" onClick={toggleDrawer}>
                  ✕
                </button>

                <Link className="nav-item" to="/" onClick={closeDrawer}>Home</Link>

                <Link className="nav-item" to="/about" onClick={closeDrawer}>About</Link>

                <Link className="nav-item" to="/courses" onClick={closeDrawer}>Courses</Link>

                <Link className="nav-item" to="/contact" onClick={closeDrawer}>Contact</Link>
                <Link
                      to="/admission"
                      class="ham-apply-btn"
                      onClick={closeDrawer}
                >
                Apply Now!
              </Link>
            </nav>
            
      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
      </header>
    );
}

export default Header;