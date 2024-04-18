import React, {useState} from 'react'
import Overlay from './overlay'
import styled from 'styled-components';

const PosterDiv = styled.div`
flex-direction: column;
justify-content: center;
margin: 10px;
background-color: #373B6A;
border-radius: 5px;
position: relative;
height: 375px;
`

const Title = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
font-size: 0.8em;;
justify-content: space-between;
`

export default function Poster({id, coverImg, title, rating, overview}) {
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = () => {
        setIsHover(true)

    }
    const onMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <PosterDiv>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title} style={{width: '100%',
        borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}/>
            {isHover && <Overlay title={title} overview={overview}/>}
            <Title>
                <div>{title}</div>
                <div>⭐ {rating}</div>
            </Title>
            </div>
        </PosterDiv>
    )
}