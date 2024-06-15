import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, complete } from '../redux/todoSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const List = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
    margin-bottom: 30px;
`

const Check = styled.input`
    width: 20px;
    height: 20px;
`

const Btn = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: #fff;
    font-size: 18px;
`

const Text = styled.div`
    width: 150px;
    text-align: left;
`

export default function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const trash =<FontAwesomeIcon icon={faTrashCan} />

    console.log(todolist)

    const todolistView = todolist.map((todo, idx) => (
        <List key={todolist[idx].id}>
            <Check type='checkbox' onChange={() => dispatch(complete(todolist[idx].id))} />
            <Text>{todo.complete == false ? <>{todo.text}</> : <del>{todo.text}</del>}</Text>
            <Btn type='button' onClick={() => dispatch(remove(todolist[idx].id))}>{trash}</Btn>
        </List>
    ))

    return (
        <div>
            <ul>
                {todolistView}
            </ul>
        </div>
    )
}