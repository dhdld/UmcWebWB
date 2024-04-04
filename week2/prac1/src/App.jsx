import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1);
    console.log('increase가 클릭됨');
  }

  function decrease(){
    setCount(count-1);
    console.log('decrease가 클릭됨');
  }

  return (
    <>
    <h2>{count}</h2>
    <button onClick={()=>increase()}>+1</button>
    <button onClick={()=>decrease()}>-1</button>
    </>
  )
}

export default App
