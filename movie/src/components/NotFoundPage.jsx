import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    `

const ToMain = styled.div`
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
    `

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <Div>
            <h1>
            Oops!
            </h1>
            <p>예상치 못한 에러가 발생했습니다 ; '^'</p>
            <p>
            Not Found
            </p>
            <ToMain onClick={()=>navigate('/')}>
                메인으로 이동하기
            </ToMain>
        </Div>
    )
}

export default NotFoundPage