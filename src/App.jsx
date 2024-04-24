import { useState } from "react"

const App = () => {

  const[plusCount,setPluscnt]=useState(0)
  const[minCount,setMincnt]=useState(0)
  const[zeCount,setZecnt]=useState(0)



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
      <div>Plus count: {plusCount}</div>
      <div>Minus count: {minCount}</div>
      <div>Zero count: {zeCount}</div>
    <div>
      <button onClick={()=>{setPluscnt(plusCount+1)}}>Plus</button>
      <button onClick={()=>{setMincnt(minCount-1)}}>Minus</button>
            <button onClick={()=>setZecnt(0)}>Zero</button>

    </div>

    </div>  )
}

export default App