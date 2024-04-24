import { useState } from "react"

const App = () => {

  const[count,setCount]=useState({
    plus:0,
    minus:0,
    zero:0
  })
  // const[minCount,setMincnt]=useState(0)
  // const[zeCount,setZecnt]=useState(0)



//   const hndlPlus = () =>{
//       setCounter(counter+1)
//   }

//   const hndlMinus = () =>{
//     setCounter(counter-1)
// } 

// const hndlZe = () =>{
//   setCounter(0)
// }

  return (
    <div>
      <div>Plus count: {count.plus}</div>
      <div>Minus count: {count.minus}</div>
      <div>Zero count: {count.zero}</div>
    <div>
      <button onClick={()=>{setCount({
        ...count,plus:count+1
      })}}>Plus</button>
      <button onClick={()=>{setCount({
        ...count,minus:count=1
      })}}>Minus</button>
            <button onClick={()=>setCount({
              ...count,zero:0
            })}>Zero</button>

    </div>

    </div>  )
}

export default App