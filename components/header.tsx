'use client';

import React, { useState } from 'react';

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
  };

  const titleStyle = {
    fontSize: '2rem',
    margin: 0,
  };

  const navStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = hovered ? '#FFD700' : 'white'; 

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Marketplace Segar</h1>
        <nav>
          <ul style={navStyle}>
            {['about', 'products', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  style={{ ...linkStyle, color: linkHoverStyle }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Responsif untuk perangkat kecil */}
      <style>
        {`
          @media (max-width: 768px) {
            header div {
              display: flex;
              flex-direction: column;
            }

            header ul {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
