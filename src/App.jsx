import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    children: [
      {
        path:"login",
        element: <Login />,
        children: [
          {
            path:"forgot",
            element: <h3>Password reset done, kindly verify your email</h3>
          }
        ]
      },
      {
        path:"register",
        element: <Register />
      },
    ]
  }
  ])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App