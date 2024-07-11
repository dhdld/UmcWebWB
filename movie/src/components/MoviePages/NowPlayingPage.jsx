//import Poster from '../Poster';
import { useEffect, useState, useRef, useCallback, Suspense, lazy } from 'react';
import styled from 'styled-components';
import Loading from '../loading';
import { ClipLoader } from "react-spinners";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useInfiniteQuery } from '@tanstack/react-query';

const Poster = lazy(()=>import('../Poster'))

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
    const totalPage = 100 // 너무 많아서 100으로 제한

    const fetchMovies = async ({ pageParam = 1 }) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?&page=${pageParam}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`
        );
        const data = await response.json();
        return data
      };

      const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.page < totalPage) return lastPage.page + 1;
          return undefined;
        },
      });


    const observerElem = useRef()
    const lastMovieElementRef = useCallback(
        (node) => {
            if (isFetchingNextPage) return;
            if (observerElem.current) observerElem.current.disconnect();
            observerElem.current = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
                }
            });
            if (node) {
              observerElem.current.observe(node);
            }
          },
          [isFetchingNextPage, hasNextPage, fetchNextPage]
        );
      

    return (
        <>
        <Suspense fallback={<Loading />}>
        <Posters>
        {data?.pages &&
        data.pages.map((page, pageIndex) =>
          page.results.map((movie, movieIndex) => {
            const isLast = pageIndex === data.pages.length - 1 && movieIndex === page.results.length - 1;
            return (
              <div ref={isLast ? lastMovieElementRef : null} key={movie.id}>
                <Poster
                  id={movie.id}
                  coverImg={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  overview={movie.overview}
                />
              </div>
            );
          })
        )}
      {isFetchingNextPage && <MoreLoading />}
    </Posters>
    </Suspense>
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