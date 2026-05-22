import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onfavoriteClick() {
    alert("clicked");
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button className="favourite-btn" onClick={onfavoriteClick}>
              ♥
            </button>
          </div>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
