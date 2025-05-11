import Header from './components/header.jsx'
import MovieGrid from './components/movie-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('https://ghibliapi.vercel.app/films/')
      const data = await response.json()
      setMovies(data.results)
    }
    fetchMovies()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Header />
      <MovieGrid movies={movies} />
    </main>
  )
}
