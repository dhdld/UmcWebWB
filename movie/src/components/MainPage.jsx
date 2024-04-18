import styled from 'styled-components';

export default function MainPage() {
    const Welcome = styled.div`
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        justify-content: center;
        height: 30vh;
        background-color: black;
        align-content: center;
        `
    const Div = styled.div`
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.7rem;
        font-weight: bold;
        `
    const Search = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        font-weight: 900;
        `
    const Input = styled.input`
        font-size: 1.5rem;
        border: 1px solid black;
        border-radius: 20px;
        height: 30px;
        `
    const Button = styled.button`
        font-size: 1.5rem;
        margin-left: 10px;
        background-color: #FCC624;
        border: none;
        border-radius: 50px;
        height: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        `
    return (
        <>
        <Welcome>
            <p >
            환영합니다 
            </p>
        </Welcome>
        <Div>
            <p>
            🎥 Find your movies !
            </p>
            <Search>
                <Input type="text" />
                <Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>                 
            </Button>
            </Search>
        </Div>
        </>
    )
}