import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchPoster from './SearchPoster';
import useDebounce from './hooks/useDebounce';

const SearchDiv = styled.div`
justify-content: center;
align-items: center;
font-weight: bold;
::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-thumb {
    background-color: #FCC624;
    border-radius: 10px;
}
`
const SearchBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
margin-bottom: 30px;
`
const SearchTitle = styled.div`
font-size: 1.8rem;
margin: 20px;
text-align: center;
`
const Input = styled.input`
width: 300px;
font-size: 14px;
border: 1px solid black;
border-radius: 20px;
height: 35px;
&:focus {
    outline: none;
}
padding-left: 15px;
`
const Button = styled.button`
font-size: 1.5rem;
margin-left: 15px;
background-color: #FCC624;
border: none;
border-radius: 50px;
height: 25px;
width: 25px;
display: flex;
align-items: center;
`

const SearchBox = styled.div`
justify-content: center;
align-items: center;
width: 800px;
background-color: #171A32;
height: 70vh;
border-radius: 10px;
margin-bottom: 50px;
position: relative;
overflow-y: auto;
`

const Posters = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
gap: 3px;
padding: 10px;
margin: 10px;
`

const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-size: 1rem;
`


const Search = () => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovies = async (text) => {
        const json = await(await fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&include_adult=false&language=ko-KR&page=1`)).json();
        setMovies(json.results)
        setLoading(false)
    }

    const Searching = (e) => {
        setSearch(e.target.value)
        setLoading(true)
        if(e.target.value == '') setMovies([]);
    }

    const debounceSearch = useDebounce(search, 500);

    useEffect(() => {
        getMovies(search)
    }, [debounceSearch])

    return (
        <SearchDiv>
            <SearchTitle>
            🎥 Find your movies !
            </SearchTitle>
            <SearchBar>
                <Input type="text" value={search} onChange={Searching} />
                <Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>                 
            </Button>
            </SearchBar>
            { search ? 
            <SearchBox>
                {loading ? <Loading>로딩 중입니다...</Loading> :
            <Posters>
                {movies.map((movie) => (
                    <SearchPoster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
                    rating={movie.vote_average} overview={movie.overview} />
                    ))
                }
            </Posters>
            }
            </SearchBox>
            : <></> }
        </SearchDiv>
    )
}

export default Search;