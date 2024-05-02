import { Link, Outlet, useNavigate } from "react-router-dom"
import loginImg from '../assets/guvi_login.png'

const Login = () => {
  const log_nav = useNavigate()
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={loginImg} alt="Guvi Login" style={{width:"100%"}} />
          </div>

          <div className="col">
            <h3 style={{textAlign:"center"}}>Login</h3>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" /><br />
              </div>
              <button 
              type="submit" 
              class="btn btn-primary"
              onClick={(e)=>{
                e.preventDefault()
                log_nav("/dashboard")
              }
              }
              >Login</button>
            </form>
          </div> 
        </div>    
      </div>
    </div>
  )
}

export default Login