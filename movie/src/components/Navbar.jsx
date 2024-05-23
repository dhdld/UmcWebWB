import { useEffect, useState } from 'react';
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
font-weight: bold;
`
const Join = styled(Li)`
    font-weight: bold;
`

export default function Navbar() {
    const navigate = useNavigate();

    const [isLogin, setLogin] = useState(false)

    const [isJoin, setJoin] = useState(false)
    const [isSignIn, setSignIn] = useState(false)

    const token = localStorage.getItem('token')
    console.log(token)

    useEffect(() => {
        if (token) {
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    }, [token])

    const logout = () =>{
        localStorage.removeItem('token')
        setLogin(false)
        setJoin(false)
        setSignIn(false)
        window.location.reload()
        navigate('/')
    }

    const goHome = () => {
        navigate('/')
        setJoin(false)
        setSignIn(false)
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
    }

    const handleJoin = () => {
        setJoin(true)
        setSignIn(false)
        navigate('/signup')
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
    }
    const handleLogin = () => {
        setSignIn(true)
        setJoin(false)
        navigate('/login')
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
        setSignIn(false)
    }
    const [isNowPlaying, setNowPlaying] = useState(false)
    const handleNowPlaying = () => {
        setNowPlaying(true)
        setPopular(false)
        setTopRated(false)
        setUpcoming(false)
        navigate('/nowplaying')
        setJoin(false)
        setSignIn(false)
    }
    const [isTopRated, setTopRated] = useState(false)
    const handleTopRated = () => {
        setTopRated(true)
        setPopular(false)
        setNowPlaying(false)
        setUpcoming(false)
        navigate('/toprated')
        setJoin(false)
        setSignIn(false)
    }
    const [isUpcoming, setUpcoming] = useState(false)
    const handleUpcoming = () => {
        setUpcoming(true)
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        navigate('/upcoming')
        setJoin(false)
        setSignIn(false)
    }

    return (
                <Nav>
                <p onClick={() => goHome()}>UMC Movie</p>
                <Ul>
                    {
                    isLogin ? <CheckedLi onClick={()=>logout()}>로그아웃</CheckedLi> :
                    ( isSignIn ? <CheckedLi onClick={() => handleLogin()}>로그인</CheckedLi>
                    : <Join onClick={() => handleLogin()}>로그인</Join>
                    )}
                    {
                    isLogin ? null :
                    ( isJoin ? 
                        <CheckedLi onClick={() => handleJoin()}>회원가입</CheckedLi> 
                        : <Join onClick={() => handleJoin()}>회원가입</Join>
                    )
                    }
                    
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