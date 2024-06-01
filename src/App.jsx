import { useReducer } from "react"
import { initState,countChangeReducer } from "./reducers/countModifier"

const App = () => {
const [state,dispatch] = useReducer(countChangeReducer,initState)

  return (
    <div>
      <h3>Counter: {state.count}</h3>
      <button onClick={()=>{
          dispatch({type:"add"})
        }}>Increment</button>

      <button onClick={()=>{
          dispatch({type:"minus"})
        }}>Decrement</button>

      <button onClick={()=>{
          dispatch({type:"zero"})
        }}>Reset</button>
    </div>
  )
}

export default App