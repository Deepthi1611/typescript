// import React, { ReactNode } from 'react'

// type counterProps = {setCount: React.Dispatch<React.SetStateAction<number>>,
//     children: ReactNode
// }

// const Counter = ({setCount, children}: counterProps) => {
//   return (
//     <>
//     <h1>{children}</h1>
//     <button onClick={()=>setCount((prev) => prev+1)}>+</button>
//     <button onClick={()=>setCount((prev) => prev-1)}>-</button>
//     </>
//   )
// }

// export default Counter

import React, {ChangeEvent, ReactNode, useReducer} from "react"

const initialState = {count: 0, text:""}

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}


type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string
}
const reducer = (state:typeof initialState, action: ReducerAction): typeof initialState => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT :
            return {...state, count: state.count+1}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state, count: state.count-1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state, text: action.payload ?? ''}
        default: throw new Error('error!')
    }
}

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    // dispatch function is used to trigger the reducer function. 
    const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })
    }

    return (
        <>
            {/* <h1>{children(state.count)}</h1> */}
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input type="text" onChange={handleTextInput} />
            <h2>{state.text}</h2>
        </>
    )
}
export default Counter