import { useEffect, useState } from "react"
import Moviecard from "../components/movie-card"
import { getmovie } from "../api/api"
import "../css/home.css"

function Home() {

    const [movie, setmovie] = useState([])
    const [err, seterr] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect( () => {

        const loadmovie = async() => {

            try{
                const storemovie = await getmovie()
                setmovie(storemovie)
            }
            
            catch(err){
                seterr("Failed to load movies...")
            }
            
            finally{
                setloading(false)
            }
        }

        loadmovie()

    }, [])

    return(

        <>

        <header className="h_header">
            <div>
                <i> My Home </i>
            </div>

            <div>
                <i> favourite </i>
                <i> Home page </i>
            </div>

        </header>

        <div className="box">

            {err && <div> {err} </div>}
       
            { loading ? (<div> loading... </div>) : (<div className="box"> {movie.map((movie) => (<Moviecard movie={movie} key={movie.id}/>))} </div> )}
        
        </div>
        
        </>
    )
}

export default Home