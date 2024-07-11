import Poster from '../Poster';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Loading from '../loading';
import Pagination from '../Pagination';

import { useQuery } from '@tanstack/react-query';

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

export default function PopularPage() {
    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)
    const totalPage = 100 // 너무 많아서 100으로 제한
    const location = useLocation()

    const fetchMovies = async ({ pageParam = 1 }) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?&page=${pageParam}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`
        );
        const data = await response.json();
        return data.results;
      };

      const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['movies', page],
        queryFn: () => fetchMovies({ pageParam: page }),
        keepPreviousData: true,
      });

    useEffect(()=>{
        if(location.state !== null && location.state.page)
            setPage(location.state.page)
    }, [location.state])

    return (
        <>
                <Posters>
                {(isLoading && !isFetching) ? (
        <Loading />
      ) : (
        data && data.map((movie) => (
          <Poster
            key={movie.id}
            id={movie.id}
            coverImg={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            overview={movie.overview}
          />
        ))
      )}
            </Posters>

            <Pagination setPage={setPage} current={page} total={totalPage} />

        </>
    )
}