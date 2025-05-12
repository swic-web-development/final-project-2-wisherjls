import Header from './components/header.jsx'
import MovieGrid from './components/movie-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('https://ghibliapi.vercel.app/films/')
      const data = await response.json()
      setMovies(data)
    }
    fetchMovies()
  }, [])

  return (
    <main
      style={{ backgroundColor: '#136c68' }}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Header />
      <MovieGrid movies={movies} />
    </main>
  )
}
