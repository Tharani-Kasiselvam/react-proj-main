import { useContext, useRef } from "react"
import { ProfContext } from "../App"

const TestProf = () => {
    const {changeProf} = useContext(ProfContext)
    const profRef = useRef(null)

    const modName = () => {
        changeProf(profRef.current.value)
    }

  return (
    <div>
        <input type="text" placeholder="Profile Name" ref={profRef}/>
        <button onClick={modName}>Modify Profile Name</button>
    </div>
  )
}

export default TestProf