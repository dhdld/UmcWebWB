import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import API from '../API';

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
&:focus {
    outline: none;
}
@media (max-width: 768px) {
    width: 290px;
}
    `
    const ErrMsg = styled.div`
    color: red;
    font-size: 12px;
    text-align: left;
    width: 400px;
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
    @media (max-width: 768px) {
        width: 330px;
    }    
`


const Login = () => {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const [idMessage, setIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value)
        if(e.target.value.length > 0) {
            setIdMessage('')
            setIsId(true)
        } else {
            setIdMessage('아이디를 입력해주세요.')
            setIsId(false)
        }
    }

    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value === '') {
            setPasswordMessage('비밀번호를 입력해주세요.')
            setIsPassword(false)
        } else if(e.target.value.length < 4) {
            setPasswordMessage('비밀번호는 4자리 이상이어야 합니다.')
            setIsPassword(false)
        } else if(e.target.value.length > 12) {
            setPasswordMessage('최대 12자리까지 입력 가능합니다.')
            setIsPassword(false)
        } else if(!passwordRegex.test(e.target.value)) {
            setPasswordMessage('비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.')
            setIsPassword(false)
        }
        else {
            setPasswordMessage('')
            setIsPassword(true)
        }
    }

    const onSubmit = (e) => {
        if(isId && isPassword) {
            e.preventDefault();
            login();
        }
        else {
            if(id === '') {
                setIdMessage('아이디를 입력해주세요.')
            }
            if(password === '') {
                setPasswordMessage('비밀번호를 입력해주세요.')
            }
        }
    }

    async function login() {
        try {
            const response = await API.post('/auth/login', 
            {
                "username": id,
                "password": password
              })
            response.data.token && localStorage.setItem('token', response.data.token)
            alert('로그인 성공')
            navigate('/')
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
            <Container>
            <h3>로그인 페이지</h3>
                <Form onSubmit={onSubmit}>
                <Input type="text" placeholder="아이디를 입력해주세요" value={id} onChange={onChangeId}/>
            <ErrMsg>{idMessage}</ErrMsg>
                <Input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword}/>
            <ErrMsg>{passwordMessage}</ErrMsg>
            { isId &&  isPassword  ? 
            <Submit style={{backgroundColor:'#FCC624'}}>로그인</Submit> 
             : <Submit >로그인</Submit> }
                </Form>
            </Container>
    );
}

export default Login;