import { Link, Outlet } from "react-router-dom"
const Home = () => {
  return (
    <div>
        <h1>Welcome to Homepage</h1>
        <p>This is the new page which guides with various features</p>
        <Link to="/login">Login</Link><br />
        <Link to="/register">Register</Link>

        <Outlet />

    </div>

  )
}

export default Home