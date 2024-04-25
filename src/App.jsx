import {RouterProvider,createBrowserRouter} from "react-router-dom"

const App = () => {
  const router = createBrowserRouter ({
    path:"/",
    element:<h1>Hello World</h1>
  })
  return <RouterProvider router={router} />
}

export default App