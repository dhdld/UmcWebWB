import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import DoneList from './components/DoneList'

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([
  ]);

  const onCreate = (text) => {
    const todo = {
      id : todos.length + 1,
      text,
      isDone: false
    }
    setTodos([...todos, todo])
  }

  const doneTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: true} : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <h1>UMC Study Plan</h1>
      <hr />
      <TodoCreate onCreate ={onCreate}/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <TodoList todos={todos} doneTodo={doneTodo} />
      <DoneList todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
