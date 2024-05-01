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
const Join = styled(Li)`
    color: #FCC624;
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
    }
    const [isNowPlaying, setNowPlaying] = useState(false)
    const handleNowPlaying = () => {
        setNowPlaying(true)
        setPopular(false)
        setTopRated(false)
        setUpcoming(false)
        navigate('/nowplaying')
    }
    const [isTopRated, setTopRated] = useState(false)
    const handleTopRated = () => {
        setTopRated(true)
        setPopular(false)
        setNowPlaying(false)
        setUpcoming(false)
        navigate('/toprated')
    }
    const [isUpcoming, setUpcoming] = useState(false)
    const handleUpcoming = () => {
        setUpcoming(true)
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        navigate('/upcoming')
    }

    return (
        <div>
                <Nav>
                <p onClick={() => goHome()}>UMC Movie</p>
                <Ul>
                    {isJoin ? <Join onClick={() => handleJoin()}>회원가입</Join> 
                    : <Join onClick={() => handleJoin()} style={{color:'white'}}>
                    회원가입
                    </Join>}
                    {isPopular ? <Li onClick={() => handlePopular()} style={{color:'#FCC624'}}>Popular</Li>
                    : <Li onClick={() => handlePopular()}>Popular</Li>}
                    {isNowPlaying ? <Li onClick={() => handleNowPlaying()} style={{color:'#FCC624'}}>Now Playing</Li>
                    : <Li onClick={() => handleNowPlaying()}>Now Playing</Li>}
                    {isTopRated ? <Li onClick={() => handleTopRated()} style={{color:'#FCC624'}}>Top Rated</Li>
                    : <Li onClick={() => handleTopRated()}>Top Rated</Li>}
                    {isUpcoming ? <Li onClick={() => handleUpcoming()} style={{color:'#FCC624'}}>Upcoming</Li>
                    : <Li onClick={() => handleUpcoming()}>Upcoming</Li>}
                </Ul>
                </Nav>
        </div>
    )
}