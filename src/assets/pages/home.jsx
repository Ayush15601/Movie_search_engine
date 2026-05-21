import { useState } from "react"
import MovieCard from "../components/movie_card"

function Home() {

    const movies = [
        {id:1, title: "John Wick", release_date: "2020"},
        {id:2, title: "Avatar", release_date: "2022"},
        {id:3, title: "Jony English", release_date: "2023"},
        {id:4, title: "DHurendar", release_date: "2024"},
    ]

    const [SearchQuery, SetSearchQuery] = useState("")

    const handleSearch = (e) => {
        
        e.preventDefault()
        alert(SearchQuery)}

    return(
        <>
        
        <div className="home">
            
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="serch for movies..." className="search-input" value={SearchQuery} onChange={(e) => {SetSearchQuery(e.target.value)}}/>
                <button type="submit" className="search-button"> Search </button>
            </form>

            <div className="movie-grid">

                {/* conditional rendering */}
                {movies.map( (movie) => movie.title.toLowerCase().startsWith(SearchQuery) && <MovieCard movie={movie} Key={movie.id} />)}
            </div>

        </div>
    
        </>
    )
}

export default Home  