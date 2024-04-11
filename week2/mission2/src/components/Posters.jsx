import Poster from './Poster';
import movies from '../movies'

export default function Posters() {
    return (
        <div>
            <div className='posters'>
                { movies && movies.results.map((movie) => (
                    <Poster key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.original_title} 
                    rating={movie.vote_average} overview={movie.overview} />
                    ))}
            </div>
        </div>
    )
}