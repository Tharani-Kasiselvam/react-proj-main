import { Link, Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const DashboardNav = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link disabled">Welcome Tharani!!!</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    </div> 

    <div className="row">
      <div className="container-fluid">
        <div className="row">
          <div className="col" style={{maxWidth:"350px"}}>
            <SideBar />
          </div>
     
          <div className="col">
            <Outlet />
          </div>
        </div> 
      </div>  
    </div>  
  </div>
  )
}

export default DashboardNav