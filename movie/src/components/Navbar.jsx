import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: white;
padding: 0 3px;
font-size: 0.9rem;
padding-left: 10px;
background-color: #171A32;
position: sticky;
top: 0;
z-index: 100;
height: 50px;
`
const Ul = styled.ul`
display: flex;
align-items: center;
list-style: none;
`
const Li = styled.li`
margin: 0 14px;
cursor: pointer;
&:hover {
    transform: scale(1.1);
    font-weight: bold;
}
`
const CheckedLi = styled(Li)`
color: #FCC624;
`
const Join = styled(Li)`
    font-weight: bold;
`

export default function Navbar() {
    const [isJoin, setJoin] = useState(false)
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
        setJoin(false)
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
    }

    const handleJoin = () => {
        setJoin(!isJoin)
        navigate('/signup')
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
    }

    const [isPopular, setPopular] = useState(false)
    const handlePopular = () => {
        setPopular(true)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
        navigate('/popular')
        setJoin(false)
    }
    const [isNowPlaying, setNowPlaying] = useState(false)
    const handleNowPlaying = () => {
        setNowPlaying(true)
        setPopular(false)
        setTopRated(false)
        setUpcoming(false)
        navigate('/nowplaying')
        setJoin(false)
    }
    const [isTopRated, setTopRated] = useState(false)
    const handleTopRated = () => {
        setTopRated(true)
        setPopular(false)
        setNowPlaying(false)
        setUpcoming(false)
        navigate('/toprated')
        setJoin(false)
    }
    const [isUpcoming, setUpcoming] = useState(false)
    const handleUpcoming = () => {
        setUpcoming(true)
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        navigate('/upcoming')
        setJoin(false)
    }

    return (
                <Nav>
                <p onClick={() => goHome()}>UMC Movie</p>
                <Ul>
                    {isJoin ? <Join onClick={() => handleJoin()} style={{color:'#FCC624'}}>회원가입</Join> 
                    : <Join onClick={() => handleJoin()}>
                    회원가입
                    </Join>}
                    {isPopular ? <CheckedLi onClick={() => handlePopular()}>Popular</CheckedLi>
                    : <Li onClick={() => handlePopular()}>Popular</Li>}
                    {isNowPlaying ? <CheckedLi onClick={() => handleNowPlaying()}>Now Playing</CheckedLi>
                    : <Li onClick={() => handleNowPlaying()}>Now Playing</Li>}
                    {isTopRated ? <CheckedLi onClick={() => handleTopRated()} >Top Rated</CheckedLi>
                    : <Li onClick={() => handleTopRated()}>Top Rated</Li>}
                    {isUpcoming ? <CheckedLi onClick={() => handleUpcoming()}>Upcoming</CheckedLi>
                    : <Li onClick={() => handleUpcoming()}>Upcoming</Li>}
                </Ul>
                </Nav>
    )
}