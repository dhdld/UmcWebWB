import Poster from '../Poster';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../loading';

const Posters = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 10px;
padding: 10px;
margin: 20px;
margin-left: 50px;
margin-right: 50px;
background-color: #22264C;
`

export default function NowPlayingPage() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const json = await (
                    await fetch(`https://api.themoviedb.org/3/movie/now_playing?&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`)).json();
            setMovies(json.results);
        console.log(json.results)

        setLoading(false)
    }

    useEffect(()=>{
        getMovies()
    }, [])

    return (
        <Posters>
            {loading ? <Loading />:
        movies.map((movie) => (
            <Poster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
            rating={movie.vote_average} overview={movie.overview} />
            ))
        }
    </Posters>
)
}