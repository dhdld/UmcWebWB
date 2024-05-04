import React, {useState} from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const PosterDiv = styled.div`
flex-direction: column;
justify-content: center;
margin: 10px;
background-color: #373B6A;
border-radius: 5px;
position: relative;
height: 290px;
font-size: 1em;
`

const Title = styled.div`
display: flex;
padding: 5px 10px;
font-size: 0.5em;
justify-content: space-between;
`

const Overview = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
text-align: left;
font-size: 0.6em;
opacity: 0;
color: white;
transition: 0.3s ease;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 5px;
&:hover {
    opacity: 1;
    cursor: pointer;
}
`

export default function SearchPoster({id, coverImg, title, rating, overview}) {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = () => {
        setIsHover(true)

    }
    const onMouseLeave = () => {
        setIsHover(false)
    }

    const Overlay = () => (
        <Overview>
        <div style={{
            fontWeight: 'bold',
            margin: '20px',
            marginBottom: '10px'
        }}>{title}</div>
        <div style={{margin:'20px'}}>
        {overview && overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
        </div>
    </Overview>
    )

    return (
        <PosterDiv onClick={()=>navigate(`/movie/${title}`)}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title} style={{height:'230px',width:'100%',
        borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}/>
            {isHover && <Overlay/>}
            <Title>
                <div style={{width:"70%"}}>{title}</div>
                <div>⭐ {rating.toFixed(1)}</div>
            </Title>
            </div>
        </PosterDiv>
    )
}