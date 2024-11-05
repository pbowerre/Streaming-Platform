// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import MovieCard from './Components/MovieCards/MovieCards';
import SkeletonLoader from './Components/MovieCards/SkeletonLoader';

interface Movie {
  title: string;
  imageUrl: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch with timeout
    setTimeout(() => {
      setMovies([
        { title: 'Deadpool Wolverine', imageUrl: 'deadpool.jpg' },
        { title: 'Dune', imageUrl: 'dune.jpg' },
        { title: 'Transformers', imageUrl: 'transformers.jpg' },
        { title: 'Joker', imageUrl: 'joker.jpg' },
        { title: 'Furiosa', imageUrl: 'furiosa.jpg' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner />
      <section className="movie-section">
        <h2>Recent Movies</h2>
        <div className="movie-grid">
          {loading
            ? Array(5).fill(null).map((_, index) => <SkeletonLoader key={index} />)
            : movies.map((movie, index) => (
                <MovieCard key={index} title={movie.title} imageUrl={movie.imageUrl} />
              ))}
        </div>
      </section>
    </div>
  );
};

export default App;
