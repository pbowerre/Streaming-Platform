// src/components/Header/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>Dashboard</li>
          <li>Movies</li>
          <li>Series</li>
          <li>Kids</li>
        </ul>
      </nav>
      <div className="profile">
        <input type="text" placeholder="Search" />
        <img src="profile.jpg" alt="User" className="profile-img" />
      </div>
    </header>
  );
};

export default Header;
