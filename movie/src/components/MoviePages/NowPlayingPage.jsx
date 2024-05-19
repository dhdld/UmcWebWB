import Poster from '../Poster';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Loading from '../loading';
import { ClipLoader } from "react-spinners";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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

    const [oneLoading, setOneLoading] = useState(false)
    const target = useRef(null)
    const [page, setPage] = useState(1)
    const totalPage = 100 // 너무 많아서 100으로 제한

    const [observe, unobserve] = useIntersectionObserver(()=>{
        setPage((page) => page + 1)
    })

    useEffect(()=>{
        if(page == 1) observe(target.current)

        if(totalPage < page) {
            unobserve(target.current)
        }
    }, [page])


    const getMovies = async () => {
        setOneLoading(true)
        const json = await (
                    await fetch(`https://api.themoviedb.org/3/movie/now_playing?&page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`)).json();
            setMovies((movies) => [...movies, ...json.results])
        setLoading(false)
        setOneLoading(false)
    }

    useEffect(()=>{
        getMovies()
        console.log(page)
    }, [page])

    useEffect(()=>{
        if(loading) unobserve(target.current)
        else observe(target.current)
    }, [loading])

    return (
        <>
        <Posters>
            {loading ? <Loading />:
        movies.map((movie) => (
            <Poster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
            rating={movie.vote_average} overview={movie.overview} />
            ))
        }
        {oneLoading && <MoreLoading />}
        <div ref={target}></div>
    </Posters>
    
    </>
)
}


const MoreLoading = () => {
    return (
      <div style={{
          display: "flex",
          position: "fixed",
          top: "90%",
          left: "50%",
      }}>
  
  <ClipLoader loading={true} speedMultiplier="1.5"
          color="#6986ec"
          margin={2}
  />
      </div>
    );
  };