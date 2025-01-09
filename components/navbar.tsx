import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Company</div>
      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/advantages">Advantages</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="toggle" onClick={toggleMenu}>
        {isMobile ? 'Close' : 'Menu'}
      </div>
    </nav>
  );
};

export default Navbar;