import React from 'react';
import './Navbar.css'; // Only need this import for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="OIP-removebg-preview.png" alt="ABC School" />
        <div className="span">
          <p>ABC School </p>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#course-details">Course Details</a></li>
        <li><a href="#student-bio">Student Bio</a></li>
        <li><a href="#payments">Payments</a></li>
        <li><Link to="/signup1" className="navbar-links">Login</Link></li>
      </ul>
      <div className="navbar-contact">
        <button>Contact Us</button>
      </div> 
      <div className="navbar-number">
        <p><i className="phone-icon"></i>(011) 2345 567</p>
      </div>
    </nav>
  );
}

export default Navbar;
