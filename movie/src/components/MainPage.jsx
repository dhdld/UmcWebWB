import styled from 'styled-components';
import { useState } from 'react';

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


    return (
        <Container>
        <Welcome>
            <p >
            환영합니다 
            </p>
        </Welcome>

        <Search />
        
        </Container>
    )
}

export default MainPage