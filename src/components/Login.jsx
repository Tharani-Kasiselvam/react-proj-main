import { Link, Outlet } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <form>
          <label for="name" name="lbl">User ID</label>
          <input type="text" name="txt1"></input>
          <label for="name" name="lbl">Password</label>
          <input type="text" name="txt2"></input>
          <button>Login</button><br />
      </form>
        <Link to="forgot">Forgot Password?</Link>
        <Outlet />
     </div>
  )
}

export default Login