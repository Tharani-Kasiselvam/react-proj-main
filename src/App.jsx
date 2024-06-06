import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { loader as todosLoader  } from './components/Todos'
import Todos from './components/Todos'
import './App.css'
const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Todos />,
      loader : todosLoader
    }
  ])
  return <RouterProvider router={router} />
}

export default App