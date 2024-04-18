import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
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
    
    const navigate = useNavigate();
    return (
        <div>
                <Nav>
                <p onClick={() => navigate('/')}>UMC Movie</p>
                <Ul>
                    <Li onClick={() => navigate('/')}>회원가입</Li>
                    <Li onClick={() => navigate('/popular')}>Popular</Li>
                    <Li onClick={() => navigate('/nowplaying')}>Now Playing</Li>
                    <Li onClick={() => navigate('/toprated')}>Top Rated</Li>
                    <Li onClick={() => navigate('/upcoming')}>Upcoming</Li>
                </Ul>
                </Nav>
        </div>
    )
}