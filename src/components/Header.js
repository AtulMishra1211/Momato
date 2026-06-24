import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Header =(props) => {
    const[btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
     <div className = "header">
     <div className = "logoContainer">
         <img className="logo" src ={LOGO_URL}/> 
     </div>
     <div className ="nav-items">
         <ul>
            <li>Online Status {onlineStatus?"✅":"🔴"}</li>
         <li> <Link to = "/">Home</Link></li>
         <li><Link to = "/about">About Us</Link></li>
         <li><Link to = "/contact">Contact us</Link></li>
          <li><Link to = "/grocery">Grocery</Link></li>

         <li>Cart</li> 
         <button className="login"
         onClick={()=>{
            btnNameReact==="Login"
            ?setBtnNameReact("Logout")
            :setBtnNameReact("Login");
         }}
         >{btnNameReact}</button>
         <li className="px-4 font-bold">{loggedInUser}</li>
         </ul>
     </div>
     </div>
    )
  }  

  export default Header;