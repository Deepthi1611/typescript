import React, { ReactNode } from 'react'

type counterProps = {setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({setCount, children}: counterProps) => {
  return (
    <>
    <h1>{children}</h1>
    <button onClick={()=>setCount((prev) => prev+1)}>+</button>
    <button onClick={()=>setCount((prev) => prev-1)}>-</button>
    </>
  )
}

export default Counter