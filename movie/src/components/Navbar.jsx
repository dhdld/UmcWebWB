import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
@media (max-width: 700px) {
    Ul {
        display: none;
    }
}
@media (min-width: 701px) {
    Div {
        display: none;
    }
}
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

const Div = styled.div`
display: flex;
font-size: 1.1rem;
margin-right: 10px;
`
const SideBarUl = styled.ul`
padding-left: 20px;
list-style: none;
display: flex;
flex-direction: column;
position: fixed;
top: 35px;
height: 100%;
background-color: #22264C;
z-index: 10;
font-size: 1rem;
transition: right 0.7s ease;
right: ${props => props.isOpen ? '-5%' : '-100%'};
`
const SideBarLi = styled.li`
width: 100px;
margin: 10px 0;
cursor: pointer;
&:hover {
    transform: scale(1.05);
    font-weight: bold;
}
`
const SideBarCheckedLi = styled(SideBarLi)`
color: #FCC624;
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
        setOpen(false)
    }

    const goHome = () => {
        navigate('/')
        setJoin(false)
        setSignIn(false)
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
        setOpen(false)
    }

    const handleJoin = () => {
        setJoin(true)
        setSignIn(false)
        navigate('/signup')
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
        setOpen(false)
    }
    const handleLogin = () => {
        setSignIn(true)
        setJoin(false)
        navigate('/login')
        setPopular(false)
        setNowPlaying(false)
        setTopRated(false)
        setUpcoming(false)
        setOpen(false)
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
        setOpen(false)
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
        setOpen(false)
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
        setOpen(false)
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
        setOpen(false)
    }

    const [isOpen, setOpen] = useState(false)
    const IsSideBar = () => {
        setOpen(!isOpen)
    }
    return (
            <>
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
                <Div onClick={()=>IsSideBar()}>
                <FontAwesomeIcon icon={faBars} style={{color: "white",}} />
                </Div>
                </Nav>
                <SideBarUl isOpen={isOpen}> 
                    {isLogin ? <SideBarLi onClick={()=>logout()}>로그아웃</SideBarLi> :
                    ( isSignIn ? <SideBarLi onClick={() => handleLogin()}>로그인</SideBarLi>
                    : <SideBarLi onClick={() => handleLogin()}>로그인</SideBarLi>
                    )}
                    {isLogin ? null :
                    ( isJoin ? 
                        <SideBarLi onClick={() => handleJoin()}>회원가입</SideBarLi> 
                        : <SideBarLi onClick={() => handleJoin()}>회원가입</SideBarLi>
                    )}
                    {isPopular ? <SideBarCheckedLi onClick={() => handlePopular()}>Popular</SideBarCheckedLi>
                    : <SideBarLi onClick={() => handlePopular()}>Popular</SideBarLi>}
                    {isNowPlaying ? <SideBarCheckedLi onClick={() => handleNowPlaying()}>Now Playing</SideBarCheckedLi>
                    : <SideBarLi onClick={() => handleNowPlaying()}>Now Playing</SideBarLi>}
                    {isTopRated ? <SideBarCheckedLi onClick={() => handleTopRated()} >Top Rated</SideBarCheckedLi>
                    : <SideBarLi onClick={() => handleTopRated()}>Top Rated</SideBarLi>}
                    {isUpcoming ? <SideBarCheckedLi onClick={() => handleUpcoming()}>Upcoming</SideBarCheckedLi>
                    : <SideBarLi onClick={() => handleUpcoming()}>Upcoming</SideBarLi>}
                </SideBarUl>
            </>
    )
}