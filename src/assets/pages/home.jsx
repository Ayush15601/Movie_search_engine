import { useEffect, useState } from "react"
import Moviecard from "../components/movie-card"
import { getmovie, searchmovie } from "../api/api"
import "../css/home.css"

function Home() {

    const [query, setquery] = useState("")
    const [movie, setmovie] = useState([])
    const [err, seterr] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect( () => {

        const loadmovie = async() => {

            try{
                const storemovie = await getmovie()
                setmovie(storemovie)
                seterr(null)
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


    const loadsearchmovie = async (e) => {

        e.preventDefault();
        if (!query.trim()) return;
        if (loading) return;
        setloading(true);

        try{
            const storesearchmovie = await searchmovie(query)
            if(!setmovie(storesearchmovie))
            seterr(null)
        }

        catch(err){
            seterr("failed to search...")
        }
       
        finally{
            setloading(false)
        }
    }


    return(

        <>

        <form className="h_form" onSubmit={loadsearchmovie}>
            <input type="text" placeholder="Search movie" onChange={(e) => setquery(e.target.value)} value={query}/>
            <input type="submit" value="Search" />
        </form>

        <div className="box">

            {err && <div> {err} </div>}
            { loading ? (<div className="h_loading"> loading... </div>) : (<div className="box"> {movie.map((movie) => (<Moviecard movie={movie} key={movie.id}/>))} </div> )}
        
        </div>

        <footer className="h_footer">

        </footer>
        
        </>
    )
}

export default Home