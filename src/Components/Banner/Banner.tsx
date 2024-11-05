// src/components/Banner/Banner.tsx
import React from 'react';
import './Banner.css';
import Button from '../Button/Button';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>The Wild Robot</h1>
        <p>A Dreamwork Original - 99% Rating 2024</p>
        <div className="banner-buttons">
          <Button text="Play" type="primary" />
          <Button text="+" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
