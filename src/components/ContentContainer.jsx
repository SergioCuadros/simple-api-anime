import axios from "axios"
import { useEffect, useState } from "react"

export const ContentContainer = () => {
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState([null])
    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/genres/anime')
            .then(response => setGenres(response.data.data))
            .catch(error => console.log(error, "Error fetching genres"))
    },[])
    console.log(genres)
    
    return (
        <>
        
        </>
    )
}
