import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/login",
    element: <h1>this is Login page</h1>
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App