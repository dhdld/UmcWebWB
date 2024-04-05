import React, { useCallback, useState } from 'react'

export default function TodoCreate({onCreate}) {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onSubmit = (e) => {
        if(e.key !== 'Enter') return
        if(value === '') return
        onCreate(value)
        setValue('')
        e.preventDefault()
    }

    return (
        <>
        <input type="text" onChange={onChange} onKeyDown={onSubmit} value={value} placeholder="UMC 스터디 계획을 작성해보세요!" className='input'/>
        </>
    )
}