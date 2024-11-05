// src/components/MovieCards/MovieCard.tsx
import React from 'react';
import './MovieCards.css';

interface MovieCardProps {
  title: string;
  imageUrl: string;
}

const MovieCards: React.FC<MovieCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default MovieCards;
