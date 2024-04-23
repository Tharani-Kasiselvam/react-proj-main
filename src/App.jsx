import TextChild from "./components/TextChild";
import { useState } from "react";


const App = () => {
  const [prntInput, setPrntnput] = useState('');
  
  const updatePrntTxt = (childText) =>{
    setPrntnput(childText);
  }

  return (
    <div>
      <label htmlFor="parentInput">Parent Text </label>
      <input type='text' id="prntInput" value={prntInput} onChange={(e)=>setPrntnput(e.target.value)}/>
      <TextChild updatePrntTxt={updatePrntTxt}/>
    </div>
  )
}

export default App;