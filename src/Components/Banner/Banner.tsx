// src/components/Banner/Banner.tsx
import React from 'react';
import './Banner.css';
import Button from '../Button/Button';
import Header from '../Header/Header';

const Banner: React.FC = () => {
  return (
    <>
    <Header/>
        <div className="banner">
        <div className="banner-content">
            <h1>The Wild Robot</h1>
            <p>A Dreamwork Original - <span>99% Rating</span> 2024</p>
            <div className="banner-buttons">
            <Button text="Play" type="primary" />
            <Button text="+" type="secondary" />
            </div>
        </div>
        </div>

    </>
  );
};

export default Banner;
