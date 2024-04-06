import React, {useState} from 'react'
import Overlay from './overlay'

export default function Poster({id, coverImg, title, rating, overview}) {
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = () => {
        setIsHover(true)

    }
    const onMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <div className="poster">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title} style={{width: '100%',
        borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}/>
            {isHover && <Overlay title={title} overview={overview}/>}
            <div className="title">
                <div>{title}</div>
                <div>{rating}</div>
            </div>
            </div>
        </div>
    )
}