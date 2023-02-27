import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import avatar_img from './../img/avatar.png';
import logo_img from './../img/logo.png';

function Navbar({user}){
   
   function logout(){
       
      window.open("/","_self");
   }

   return <div className="navbar">
    <span className="logo">
      <li className="nav-listitem">
         <img src={logo_img} alt="" className="avatar" />
      </li>
        <li className="nav-listitem link">
         auth
        </li>
    </span>

       {user?(<ul className="nav-list">
         <li className="nav-listitem">
            <img src={avatar_img} alt="" className="avatar" />
         </li>
        <li className="nav-listitem ">
          kuldeep
        </li>
        <li className="nav-listitem link" onClick={logout}>
         logout
        </li>
       </ul>):(
         <ul className="nav-list">
            <Link className="nav-listitem link" to="/login">
               Login
            </Link>
         </ul>
       )}
   </div>
    
}
export default Navbar;