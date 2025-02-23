import { LOGO_URL } from "../utils/constants"
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";


const Header = () => {

const[btnNameReact, setBtnNameReact] = useState("Login");
// console.log("Header Render");

const OnlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);
// console.log(loggedInUser);

// Subscribing to the store using a Selector.
const cartItems = useSelector((store)=>store.cart.items)
console.log(cartItems);


   return (
       <div className="header md:52 lg:flex justify-between bg-pink-100 shadow-lg xl:bg-green-100 lg:bg-yellow-100 md:bg-red-100 sm:bg-violet-100">
          <div className="logo-container">
            <img className="logo md:w-32 lg:w-52" src={LOGO_URL} />
          </div>
          <div className="nav-items flex items-center">
            <ul className=" lg:flex p-4 m-4">
              <li className="px-4">Online-Status : {OnlineStatus ? "🟢" : "🔴"}</li>
              <li className="px-4"> <Link to="/"> Home </Link> </li>
              <li className="px-4"> <Link to="/About"> About Us </Link> </li>
              <li className="px-4"> <Link to="/Contact"> Contact Us </Link> </li>
              <li className="px-4"> <Link to="/Grocery"> Grocery </Link> </li>
              <li className="px-4 font-bold"> <Link to="/Cart"> Cart - ({cartItems.length} items) </Link> </li>

              <button className="btn"
                  onClick={
                    () => {
                      btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); // Ternary Operator
                    }}>
                    {btnNameReact}
              </button>
              
              <li className="px-4 font-bold"> {loggedInUser} </li>

            </ul> 
          </div>
       </div>
   )
}

export default Header