import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false)
  
  function openModal() {
    setOpen(true)
    console.log('모달이 켜짐')
  }

  function closeModal() {
    setOpen(false)
    console.log('모달이 꺼짐')
  }

  return (
    <>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button onClick={()=>{openModal()}}>버튼 열기</button>
    <Modal isOpen={open} closeModal={closeModal} />
    </>
  )
}

export default App
