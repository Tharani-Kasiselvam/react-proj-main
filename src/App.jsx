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
    </div>
  )
}

export default App