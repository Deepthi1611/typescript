// import Heading from "./components/Heading"
// import Section from "./components/Section"
// import Counter from "./components/Counter"
// import List from "./components/List"
import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo, useRef } from "react"
import Counter from "./components/Counter"
import { CounterProvider } from "./context/CounterContext"

interface User {
  id: number,
  userName: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 37


function App() {
  // const [count, setCount] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  if(!inputRef.current)

  useEffect(()=>{
    console.log('mounting')

    return () => console.log('unmounting')
  },[users])

  const addOne = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev+1), [])
  // The useMemo hook in React is used to optimize performance by memoizing (caching) the result of an expensive computation, so that it only recalculates when its dependencies change. This avoids unnecessary re-computations during every render.
  const result = useMemo<number>(() => fib(myNum), [myNum])
  return (
    <>
    {/* <Heading title="Hello"/>
    {/* children are passed within the components not as props */}
    {/* <Section>This is my section</Section> */}
    {/* <Counter setCount={setCount}>Count is {count}</Counter> */}
    {/* <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} /> 
    <List items={[1,2,3,4]} render={(item: number) => <span className="bold">{item}</span>} /> */}


    {/* <h1>{count}</h1>
    <button onClick={addOne}>Add</button> 
    <h2>{result}</h2>
    <input type="text" ref={inputRef}></input> */}

    {/* <Counter>{(num: number) => <>current count: {num}</> }</Counter> */}
    <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </CounterProvider>
    </>
  )
}

export default App
