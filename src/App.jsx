import React, { useEffect, useState } from 'react'

const App = () => {
  const [cart,setCart] = useState()

  useEffect(()=>{
    fetch('/src/assets/product.json')
    .then(res => res.json())
    .then(data => setCart(data))
  },[])
  console.log(cart)

  return (
    <div>App</div>
  )
}

export default App