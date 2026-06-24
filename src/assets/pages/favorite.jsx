import "../css/fav.css";
import { useMovieContext } from "../../context/context";
import Moviecard from "../components/movie-card";

function Favourite() {
  const { fav } = useMovieContext();

  if (fav.length > 0) {
    return (
      
      <>

        <div className="f_fav"> <p> Favourites </p> </div>
      
        <div className="f_box2">
          {fav.map((movie) => ( <Moviecard movie={movie} key={movie.id} /> ))}
        </div>

      </>

    );

  } else {
    return (
    
      <>
        <div className="f_box1">
          
          <div className="f_box">
            <h2> No Favorite Movies Yet</h2>
            <br />
            <p>
              Start adding movies to your favorites and they will appear here!
            </p>
          </div>
        
        </div>
      
      </>

    );
  }
}

export default Favourite;