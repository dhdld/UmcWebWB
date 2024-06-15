import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/todoSlice'
import styled from 'styled-components'

const Input = styled.input` 
    width: 280px;
    height: 25px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
`

const Submit = styled.input`
    width: 28px;
    height: 28px;
    border-radius: 50px;
    border: 1px solid #000;
    background-color: #f2f2f2;
        font-size: 18px;
`

export default function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState({
        id: 0,
        text: '',
    })

    function handleText(e) {
        setTodolist({ text: e.target.value })
    }

    function onReset() {
        setTodolist({ text: '' })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (todolist.text !== '') { dispatch(add(todolist.text)) }
                else (alert("할 일을 입력해주세요"))
                onReset()
            }}>
                <div>
                    <Input type='text' value={todolist.text} onChange={handleText}></Input>
                    <Submit type='submit' value='+'></Submit>
                </div>
            </form>
        </div>
    )
}