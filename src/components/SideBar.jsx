import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-light" style={{width:"280px"}}>
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="/dashboard/courses" className="nav-link active" aria-current="page">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/codekata" className="nav-link link-dark">Codekata</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/webkata" className="nav-link link-dark">Webkata</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/ide" className="nav-link link-dark">IDE</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/support" className="nav-link link-dark">Support</Link>
            </li>
        </ul>

        
    </div>
  )
}

export default SideBar