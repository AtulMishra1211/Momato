import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header =(props) => {
    const[btnNameReact, setBtnNameReact] = useState("Login")
    return (
     <div className = "header">
     <div className = "logoContainer">
         <img className="logo" src ={LOGO_URL}/> 
     </div>
     <div className ="nav-items">
         <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact us</li>
         <li>Cart</li>
         <button className="login"
         onClick={()=>{
            btnNameReact==="Login"
            ?setBtnNameReact("Logout")
            :setBtnNameReact("Login");
         }}
         >{btnNameReact}</button>
         </ul>
     </div>
     </div>
    )
  }  

  export default Header;