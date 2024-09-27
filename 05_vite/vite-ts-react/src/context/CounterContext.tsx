import { createContext, useReducer, ChangeEvent, ReactElement, useCallback, useContext } from "react"

type StateType = {
    count: number;
    text: string;
}

const initState: StateType = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}

// useCounterContext Custom Hook:
// This hook uses useReducer to manage state and dispatch actions.
const useCounterContext = (initState: StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])

    const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])

    const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })
    }, [])

    return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { },
}

// context
export const CounterContext = createContext<UseCounterContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

// This is a context provider that wraps the application's components and provides access to the shared state.
// It provides the value from useCounterContext(initState) (i.e., the current state and the associated functions like increment, decrement, handleTextInput) to all its child components via the CounterContext.Provider.
export const CounterProvider = ({
    children
}: ChildrenType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}

type UseCounterHookType = {
    count: number,
    increment: () => void,
    decrement: () => void,
}

// This hook extracts just the count, increment, and decrement functions from the CounterContext using useContext.
// It allows components to access and manipulate the count without dealing with other parts of the state (like text).
export const useCounter = (): UseCounterHookType => {
    const { state: { count }, increment, decrement } = useContext(CounterContext)
    return { count, increment, decrement }
}

type UseCounterTextHookType = {
    text: string,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

// Similar to useCounter, this hook extracts the text state and handleTextInput function from the CounterContext.
// It allows components to interact with the text part of the state separately from the count.
export const useCounterText = (): UseCounterTextHookType => {
    const { state: { text }, handleTextInput } = useContext(CounterContext)
    return { text, handleTextInput }
}