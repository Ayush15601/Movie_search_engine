import "../css/moviecard.css"

function Moviecard({movie}) {

  const imgurl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`


  return(

    <>
  
    <div className="mc_box">

        <div className="img">
          <img src={imgurl} alt={movie.title} />
        </div>

        <div className="content">
          <h5> {movie.title} </h5>
          <i> {movie.release_date} </i>
          <button className="btn "> ♥ </button>
        </div>
      
    </div>
  
    </>
  )
}

export default Moviecard