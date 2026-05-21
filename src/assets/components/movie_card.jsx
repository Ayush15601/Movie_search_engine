function MovieCard({movie}) {

    function onfavoriteClick(){
        alert("clicked")
    }

    return (
        <>
        <div className="movie-card">
            <div className="movie-pster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onfavoriteClick}> 
                        heart
                    </button>
                     
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release}</p>
            </div>
        
        </div>
        </>
    )
}

export default MovieCard 