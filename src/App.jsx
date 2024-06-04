import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/about",
      element : <About />
    }
  ])
  return <RouterProvider router={router}/>
}

export default App