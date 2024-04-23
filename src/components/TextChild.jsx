import { useState } from "react";

const TextChild = ({updatePrntTxt}) => {

  const [childInput, setChildInput] = useState('');
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(childInput);
    updatePrntTxt(childInput)
  }

  const updateInput = (e) => {
    setChildInput(e.target.value);
  }

  return (
    <div>
      <form>
        <input 
          type="text"
          placeholder="Child Component..."
          name="childInput"
          value={childInput}
          onChange={updateInput}
        />
        <button onClick={handleClick}>Send to Parent</button>
      </form>
    </div>
  )
}

export default TextChild;