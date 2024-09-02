import React from 'react'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Dashboard() {
    const navigate=useNavigate();
    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(()=>{
        if(!localStorage.getItem('logintoken')) {
            navigate("/");
        }
        else {
            const fetchMovies = async () => {
                try {
                  const response = await axios.post('https://hoblist.com/api/movieList', {
                    category: 'movies',
                    language: 'kannada',
                    genre: 'all',
                    sort: 'voting',
                  });
          
                  setMovies(response.data);
                } catch (error) {
                  setError('Failed to fetch movies. Please try again later.');
                  console.error('Error fetching movies:', error);
                } finally {
                  setLoading(false);
                }
              };
          
              fetchMovies();
        }
    })
  return (
    <div>
      <h1>Kannada Movies</h1>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default Dashboard