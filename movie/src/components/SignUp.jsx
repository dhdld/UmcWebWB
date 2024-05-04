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
height: 27px;
border: none;
border-radius: 30px;
font-size: 15px;
padding: 7px 20px;
margin: 10px;
&:focus {
    outline: none;
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
    height: 45px;
    padding: 7px 20px;
    border: none;
    border-radius: 30px;
    background-color: white;
    font-size: 18px;
    margin-top: 20px;
    color: black;
`

const MoveDiv = styled.div`
width: 360px;
display: flex;
justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
    `

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [ageMessage, setAgeMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState('');

    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isAge, setIsAge] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordCheck, setIsPasswordCheck] = useState(false);

    const onChangeName= (e)=> {
        setName(e.target.value)
        if(e.target.value.length > 0) {
            setNameMessage('')
            setIsName(true)
        } else {
            setNameMessage('이름을 입력해주세요!')
            setIsName(false)
        }
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.includes('@')) {
            setEmailMessage('')
            setIsEmail(true)
        } else if(e.target.value.length === 0) {
            setEmailMessage('이메일을 입력해주세요.')
            setIsEmail(false)
        }
        else {
            setEmailMessage('이메일 형식에 맞게 입력해주세요.')
            setIsEmail(false)
        }
    }

    const onChangeAge = (e) => {
        setAge((e.target.value))
        if(e.target.value == '') {
            setAgeMessage('나이는 숫자로 입력해주세요.')
            setIsAge(false)
        }   else if(isNaN(e.target.value) == true) {
            setAgeMessage('나이는 숫자로 입력해주세요.')
            setIsAge(false)
        } else if(e.target.value < 0) {
            setAgeMessage('나이는 양수여야 합니다.')
            setIsAge(false)
        }  else if (Number.isInteger(Number(e.target.value)) == false) {
            setAgeMessage('나이는 정수로 입력해주세요')
        }   else if(e.target.value < 19) {
            setAgeMessage('19세 이상만 가입 가능합니다.')
            setIsAge(false)
        }
        else {
            setAgeMessage('')
            setIsAge(true)
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

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value)
        if(e.target.value === '') {
            setPasswordCheckMessage('비밀번호를 다시 입력해주세요.')
            setIsPasswordCheck(false)
        } else if(e.target.value !== password) {
            setPasswordCheckMessage('비밀번호가 일치하지 않습니다.')
            setIsPasswordCheck(false)
        } else {
            setPasswordCheckMessage('')
            setIsPasswordCheck(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(isName && isEmail && isAge && isPassword && isPasswordCheck) {
        console.log('name:', name, 'email:', email, 'age:', age, 'password:', password, 'passwordCheck:', passwordCheck)
        alert('회원가입이 완료되었습니다.')
        navigate('/signin')
        }
        else {
            setNameMessage('이름을 입력해주세요!')
            setEmailMessage('이메일을 입력해주세요.')
            setAgeMessage('나이는 숫자로 입력해주세요.')
            setPasswordMessage('비밀번호를 입력해주세요.')
            setPasswordCheckMessage('비밀번호를 다시 입력해주세요.')  
        }
    }


    return (
        <Container>
            <h3>회원가입 페이지</h3>
            <Form onSubmit={onSubmit}>
            <Input type="text" placeholder="이름을 입력해주세요" value={name} onChange={onChangeName}/>
            <ErrMsg>{nameMessage}</ErrMsg>
            <Input type="text" placeholder="이메일을 입력해주세요" value={email} onChange={onChangeEmail}/>
            <ErrMsg>{emailMessage}</ErrMsg>
            <Input type="text" placeholder="나이를 입력해주세요" value={age} onChange={onChangeAge}/>
            <ErrMsg>{ageMessage}</ErrMsg>
            <Input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword}/>
            <ErrMsg>{passwordMessage}</ErrMsg>
            <Input type="password" placeholder="비밀번호 확인" value={passwordCheck} onChange={onChangePasswordCheck}/>
            <ErrMsg>{passwordCheckMessage}</ErrMsg>
            
            { isName && isEmail && isAge && isPassword && isPasswordCheck ? 
            <Submit style={{backgroundColor:'#FCC624'}}>제출하기</Submit> 
             : <Submit >제출하기</Submit> }
</Form>
            <MoveDiv>
                <p>이미 아이디가 있으신가요?</p>
                <p style={{fontWeight:"bold"}} onClick={()=>navigate('/signin')}>로그인 페이지로 이동하기</p>
            </MoveDiv>
        </Container>
    );
}

export default Signup;