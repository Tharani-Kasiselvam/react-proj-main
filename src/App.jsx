import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {

  // To handle the values captured in each button, need to maintain State
  //State for handling squares
  const [squares, setSquares] = useState(Array(9).fill(null))
  //using Array function to fill all the 9 boxes

  // console.log(squares) // displays values of the array

  //To flip the Players between X and O
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {

    console.log(`Button ${i} is Clicked`)

    //To avoid click on the button which already has value. 
    //And if already Winner published, it shld not allow to click further
    if(squares[i] || calculateWinner(squares)){
      return  //it will NOT allow to execute further statements below
    }

    const newSquare = squares.slice() //return shallow copy of the array

    //handling Player Flip state
    if(xIsNext)
      newSquare[i] = 'X'
    else
    newSquare[i] = 'O'

    setSquares(newSquare)
    //After every Click changes the state
    setXIsNext(!xIsNext)
  }

  const calculateWinner = (squares) => {
    //Describe the Winning Lines
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,6],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0; i< lines.length;i++){
      const [a,b,c] = lines[i]

      if(squares[a] && squares[a]==squares[b] && squares[a] == squares[c])
        return squares[a]
    }

    //if not matching, game will still continue
    return null

  }

  //To display which Player has to play Next
  let status;
  let winner = calculateWinner(squares)

  if(winner){
    // Publishes the Winner
    status = 'Winner : ' + winner
  }

  else if(squares.every(square => square != null)){
    status= 'Draw!!!'
  }

  else{
    //Continues the game
    status = 'Next Player : ' + (xIsNext ? 'X' : 'O')

  }


  


  //just to display the States of squares. Whenever there is a change in the squares, need to view the values
  useEffect(() => {
    console.log(squares)
  }, [squares])

  return (
    // Board creation
    <div className="header">
      {/* bootstrap not required, jus row is enough */}
      {/* Next Player status */}
      <h1>{status}</h1>
      <div>
      <div className='row'>
        <button
          className='square'
          onClick={() => handleClick(0)}
          value={squares[0]}> {squares[0]}
        </button>
        <button
          className='square'
          onClick={() => handleClick(1)}
          value={squares[1]}> {squares[1]}
        </button>
        <button
          className='square'
          onClick={() => handleClick(2)}
          value={squares[2]}> {squares[2]}
        </button>
      </div>
      <div 
      className='row'>
        <button
          className='square'
          onClick={() => handleClick(3)}
          value={squares[3]}> {squares[3]}
        </button>
        <button
          className='square'
          onClick={() => handleClick(4)}
          value={squares[4]}> {squares[4]}
        </button>
        <button
          className='square'
          onClick={() => handleClick(5)}
          value={squares[5]}> {squares[5]}
        </button>
      </div>
      <div
        className='row'>
        <button className='square'
          onClick={() => handleClick(6)}
          value={squares[6]}> {squares[6]}
        </button>
        <button
          className='square'
          onClick={() => handleClick(7)}
          value={squares[7]}> {squares[7]}
        </button>
        <button
          className='square'
          onClick={() => handleClick(8)}
          value={squares[8]}> {squares[8]}
        </button>
        </div>
      </div>
    </div>
  )
}

export default App