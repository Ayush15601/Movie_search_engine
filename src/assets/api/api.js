const apikey = "e43a47f72dcdb43e634c6da9bedf76ea";
const url = "https://api.themoviedb.org/3";

export const getmovie = async () => {

    try{
        const response = await fetch(`${url}/movie/popular?api_key=${apikey}`)
        const data = await response.json()
        return data.results
    }

    catch(err){
        console.error("Error in geting movies -> ", err)
        return []
    }
}

export const searchmovie = async (query) => {

    try{
        const response = await fetch(`${url}/search/movie?api_key=${apikey}&query=${encodeURIComponent(query)}`)
        const data = await response.json()
        return data.results
    }

    catch(err){
        console.error("Error in move searching -> ", err)
        return 
    }
}