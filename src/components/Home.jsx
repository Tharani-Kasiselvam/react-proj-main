import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/about")
    }
  return (
    <div>
        <p>How to navigate from one page to anothe page using useNavigate Hook</p>
        <button onClick={handleClick}>Navigate</button>
    </div>
  )
}

export default Home