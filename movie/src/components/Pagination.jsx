import { useState, useEffect } from 'react';
import styled from 'styled-components';


const Paging = styled.div`
    display: flex;
    justify-content: center;
    gap: 90px;
    margin-bottom: 20px;
    align-items: center;
`

const ChangeButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: #22264C;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    font-size: 22px;
`
const DisabledButton = styled(ChangeButton)`
    cursor: default;
    opacity: 0.3;
    `

    const Current = styled.div`
    border: none;
    font-size: 21px;
    `

export default function Pagination({ setPage, current, total }) {
    const before = () => {
        if (current === 1) return
        setPage(current - 1)
    }
    const after = () => {
        if (current === total) return
        setPage(current + 1)
    }

    return (
        <Paging>
            {current === 1 ? 
            <DisabledButton onClick={before}>
               {'<'}
            </DisabledButton>
            :
            <ChangeButton onClick={before}>
                {'<'}
            </ChangeButton>
            }
            <Current>
                {current}
            </Current>
            <ChangeButton onClick={after}>
                {current === total ? '>>' : '>'}
            </ChangeButton>
        </Paging>
    )
}
