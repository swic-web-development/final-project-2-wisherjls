// Render a single movie card.
//used ai to speed things
export default function Card({ movie }) {
  const {
    title,
    original_title,
    original_title_romanised,
    description,
    director,
    producer,
    release_date,
    running_time,
  } = movie // Get movie details.

  return (
    <section
      className="overflow-hidden rounded-lg shadow-md"
      style={{ backgroundColor: '#D2B48C' }} // tan hex
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <h3 className="text-md text-gray-700 italic">
          {original_title} ({original_title_romanised})
        </h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-3 text-gray-700">
          <div>Director: {director}</div>
          <div>Producer: {producer}</div>
          <div>Release Date: {release_date}</div>
          <div>Running Time: {running_time} min</div>
        </div>
      </div>
    </section>
  )
}
