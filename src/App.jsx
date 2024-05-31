import { createContext } from "react"
import { useState } from "react"
import { useRef } from "react"
import TestProf from "./components/TestProf"

export const ProfContext = createContext()

const App = () => {
    const nameNoteRef = useRef(null)
    const [profName,setprofName] = useState("Tharani")

    const dispNoteVal = () => {
        alert(nameNoteRef.current.value)
    }

    const changeProf = (newProf)=>  {
        setprofName(newProf)
    }

  return (
    <div>
        
        {/* Using useRef for Prev ex-Profile */}
        <ProfContext.Provider value={{changeProf}}>
            {/* Prob#1 with UseRef */}
        <input type="text" placeholder="enter name" ref={nameNoteRef}/>
        <button onClick={dispNoteVal}>AddNote</button>
        <br /><br />
          {/* Prob#2 with existing ContextAPI */}
        <p>
            Profile Name: {profName}
        </p>
        <TestProf />
        </ProfContext.Provider>
    </div>
  )
}

export default App