// src/components/Header/Header.tsx
import React, { useState } from 'react';
import './Header.css';
import profile from '../../assets/profile.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Dashboard</li>
          <li>Movies</li>
          <li>Series</li>
          <li>Kids</li>
        </ul>
      </nav>
      <div className="profile">
    
        <input type="search" placeholder="Search" />
        <img src={profile} alt="User" className="profile-img" />
      </div>
    </header>
  );
};

export default Header;
