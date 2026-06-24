import "../css/moviecard.css";
import { useMovieContext } from "../../context/context";

function Moviecard({ movie }) {
  const imgurl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isfav, addfav, remfav } = useMovieContext();

  const favv = isfav(movie.id);

  const onclockfav = (e) => {
    e.preventDefault();
    if (favv) remfav(movie.id);
    else addfav(movie);
  };

  return (
    
    <>
      
      <div className="mc_box">
        
        <div className="img">
          <img src={imgurl} alt={movie.title} />
        </div>

        <div className="content">
         
          <h5> {movie.title} </h5>
          <i> {movie.release_date} </i>
          <button className={`btn ${favv ? "active" : ""}`} onClick={onclockfav}> ♥ </button>
        
        </div>
      
      </div>
    
    </>
    
  );
}

export default Moviecard;