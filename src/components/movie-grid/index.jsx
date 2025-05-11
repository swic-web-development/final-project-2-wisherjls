import Card from './card'

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  )
}
