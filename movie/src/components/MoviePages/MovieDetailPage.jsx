import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"

const PosterImg = styled.img`
    width: 240px;
`

const BackgroundImg = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    margin-right: 200px;
    position: relative;
    padding-top: 80px;
`

const Info = styled.div`
    flex-direction: column;
    padding-left: 80px;
    justify-content: center;
`
const MovieTitle = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    `
const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    `

const Overview = styled.p`
    font-size: 0.8rem;
    `

const MovieDetailPage = () => {
    const movieName = useParams().name;
    const [movie, setMovie] = useState([])
    const rating = []

    const getMovie = async () => {
        const json = await (
                    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${movieName}&language=ko-KR`)).json();
        setMovie(json.results[0])
    }
    useEffect(()=>{
        getMovie()
        console.log(movie)
    }, [])
    
    for(let i=0; i<Math.floor(movie.vote_average); i++){
        rating.push('⭐')
    }

    return (
        <div>
            <BackgroundImg src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
            <Div>
            <PosterImg src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <Info>
            <MovieTitle>{movie.original_title}</MovieTitle>
            <Title>평점&nbsp;
            {rating.map((rate) => rate)}
                </Title>
            <Title>개봉일 {movie.release_date}</Title>
            <Title>줄거리</Title>
            { movie.overview ? <Overview>{movie.overview}</Overview> : <Overview>TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.</Overview>
            }
            </Info>
            </Div>
        </div>
    )
}

export default MovieDetailPage