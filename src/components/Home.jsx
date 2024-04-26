import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
        <h1>Welcome to Homepage</h1>
        <p>This is the new page which guides with various features</p>
        <Link to="/login">Open Login Page</Link>
    </div>
  )
}

export default Home