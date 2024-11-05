// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import MovieCard from './Components/MovieCards/MovieCards';
import SkeletonLoader from './Components/MovieCards/SkeletonLoader';
import deadpool from './assets/deadpool.svg'
import dune from './assets/desert.svg'
import Trans from './assets/one.svg'
import Joke from './assets/joker.svg'
import furo from './assets/furo.svg'

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
        { title: 'Deadpool Wolverine', imageUrl: deadpool },
        { title: 'Dune', imageUrl: dune },
        { title: 'Transformers', imageUrl: Trans },
        { title: 'Joker', imageUrl: Joke },
        { title: 'Furiosa', imageUrl: furo},
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
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
