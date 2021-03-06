import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import React, {useContext} from "react"
import App from "../App";
import NewPlace from "./NewPlace";
import UserPlaces from "./UserPlaces";
import { AuthContext } from "../context/auth-context";
const Header = () => {
  const auth = useContext(AuthContext);
    return(
        
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
              <ul className='navbar-nav'>
            <li className="nav-item">
                      <Link className="nav-link" to="/">Pianomap</Link>
                    </li>
                    </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
          
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    
                  <ul className="navbar-nav ml-auto">

                   {auth.isLoggedIn &&( 
                    <li className="nav-item">
                      <Link className="nav-link " to="/places/new">Add piano place</Link>
                    </li>
                  
                   )} 
    {auth.isLoggedIn &&( 
<li className="nav-item">
              
                      <Link className="nav-link " to="/:userId">Account</Link>
                  
                    </li>
                     )}
                       {auth.isLoggedIn && (
        <li className="nav-item">
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}

{!auth.isLoggedIn && (
  <li className="nav-item">
   <Link className="nav-link " to="/login"> Login</Link>
   </li>
)}

{!auth.isLoggedIn && (
  <li className="nav-item">
   <Link className="nav-link " to="/signup"> Signup</Link>
   </li>
)}
                  </ul>
                </div>
            </div>
        </nav>

        
    )
}

export default Header
