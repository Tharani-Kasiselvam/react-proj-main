import { useState } from "react"

const App = () => {

  const[counter,setCounter]=useState(0)

  const hndlPlus = () =>{
      setCounter(counter+1)
  }

  const hndlMinus = () =>{
    setCounter(counter-1)
} 

  return (
    <div>
    <div>Counter: {counter}</div>
    <div>
      <button onClick={hndlPlus}>Plus</button>
      <button onClick={hndlMinus}>Minus</button>
    </div>

    </div>  )
}

export default App