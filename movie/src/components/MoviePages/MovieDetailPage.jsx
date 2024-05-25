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
    height: calc(100vh - 50px);
    position: absolute;
    z-index: -1;
    opacity: 0.2;
    @media (max-width: 768px) {
        background-image: none;
    }
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    margin-right: 200px;
    height: calc(100vh - 50px);
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 30px 0;
        height: auto;
    }
`

const Info = styled.div`
    flex-direction: column;
    padding-left: 80px;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 0 5%;
    }
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

const CastDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    @media (max-width: 768px) {
        margin-left: 50px;
        margin-right: 50px;
        height: auto;
    }
    `
const CastTitle = styled.p`
font-size: 1.1rem;
font-weight: 600;
margin-bottom: 30px;
`

    const Casts = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows:120px;
    gap: 5px;
    font-size: 0.8rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    `

const Cast = styled.div`
display: flex;
flex-direction: column;
padding: 0px;
    width: 115px;
    text-align: center;
    `

const ImgDiv = styled.div`
display: flex;
    margin:0;
    justify-content: center;
    `
const Img = styled.div`
display: flex;
    background-image: url(${props => props.src});
    width: 50px;
    height: 50px;    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    `

const CastText = styled.p`
    font-size: 0.8rem;
    margin: 1px;
    padding: 0px;
    `

const MovieDetailPage = () => {
    const id = useParams().id;
    const [movie, setMovie] = useState([])
    const [casts, setCasts] = useState([])
    const rating = []

    const getMovie = async () => {
        const json = await (
                    await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`)).json();
            setMovie(json)
        const json2 = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`)).json();
        console.log(json2.cast)
        setCasts(json2.cast)
    }
    useEffect(()=>{
        getMovie()
    }, [])
    
    for(let i=0; i<Math.floor(movie.vote_average); i++){
        rating.push('⭐')
    }

    return (
        <>
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

            <CastDiv>
            <CastTitle>출연진 및 제작진</CastTitle>
            <Casts>
            {casts.map((cast) => (
                <Cast key={cast.id}>
                    <ImgDiv>
                    {cast.profile_path === null ? <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s' alt='No Image'/> : 
                    <Img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.original_name} />
                    }
                    </ImgDiv>
                    <CastText>{cast.original_name}</CastText>
                    <CastText>{cast.known_for_department}</CastText>
                </Cast>
            ))}
            </Casts>
            </CastDiv>
        </>
    )
}

export default MovieDetailPage