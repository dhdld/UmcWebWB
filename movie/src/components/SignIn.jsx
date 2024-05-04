import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    `
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const Input = styled.input`    
width: 400px;
height: 30px;
border: none;
border-radius: 30px;
font-size: 15px;
padding: 7px 20px;
margin: 10px;
    `

const Submit = styled.button`
    width: 440px;
    height: 50px;
    padding: 7px 20px;
    border: none;
    border-radius: 30px;
    background-color: white;
    font-size: 18px;
    margin-top: 20px;
`


const SignIn = () => {
    return (
            <Container>
            <h3>로그인 페이지</h3>
                <Form>
                    <Input type="text" placeholder="아이디"/>
                    <Input type="password" placeholder="비밀번호"/>
                    <Submit>로그인</Submit>
                </Form>
            </Container>
    );
}

export default SignIn;