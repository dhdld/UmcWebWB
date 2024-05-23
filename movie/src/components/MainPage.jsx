import styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../API';
import Search from './Search';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Welcome = styled.div`
width: 100%;
font-size: 1.5rem;
font-weight: bold;
text-align: center;
justify-content: center;
height: 27vh;
background-color: black;
align-content: center;
`

    const MainPage = () => {

    const [isLogin, setLogin] = useState(false)
    const [name, setName] = useState('');


    const token = localStorage.getItem('token')

    useEffect(() => {
        console.log(token)
        getLogin(token)
    }, [])

    useEffect(() => {
        console.log(token)
        getLogin(token)
    }, [token])


    async function getLogin (token) {
        if (token) {
            await API.get('/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                console.log(res.data)
                setName(res.data.name)
                setLogin(true)
            })
        }
        else {
            setName('')
            setLogin(false)
        }
    }

    return (
        <Container>
        <Welcome>
            {isLogin ? <p>{name}님 환영합니다!</p> : <p>환영합니다</p>}
        </Welcome>

        <Search />
        
        </Container>
    )
}

export default MainPage