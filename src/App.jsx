import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainNav from './wrappers/MainNav'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import DashboardNav from './wrappers/DashboardNav'
import Courses from './components/Courses'
import Course_Dtls from './components/Course_Dtls'

const router = createBrowserRouter([
  {
    path : "/",
    element : <MainNav />,
    children : [
      {
        path : "/",
        element : <Home />
      },
    {
      path : "register",
      element : <Register />
    },
    {
      path : "login",
      element : <Login />
    }
  ]
  },
  {
    path : "/dashboard",
    element : <DashboardNav />,
    children: [
      {
        index:"true",
        // path:"courses",
        element: <Courses />
      },
      {
        path:"courses",
        element: <Courses />
      },
      {
        path : "codekata",
        element : <h1>CodeKata</h1>
      },
      {
        path : "webkata",
        element : <h1>WebKata</h1>
      },
      {
        path : "ide",
        element : <h1>IDE</h1>
      },
      {
        path : "support",
        element : <h1>Support</h1>
      },
      {
        path : "courses/:id",
        element : <Course_Dtls />
      }
    ]
  }

])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App

