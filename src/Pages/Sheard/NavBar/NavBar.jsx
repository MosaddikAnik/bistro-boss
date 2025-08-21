import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const loggedOut = () =>{
    return logOut()
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
  }
  const navOption = (
    <>
      <Link to="/" className="uppercase hover:text-amber-600">Home</Link>
      <Link to="/contact" className="uppercase hover:text-amber-600">Contact Us</Link>
      <Link to="/dashboard" className="uppercase hover:text-amber-600">Dashboard</Link>
      <Link to="/menu" className="uppercase hover:text-amber-600">Our Menu</Link>
      <Link to="/order" className="uppercase hover:text-amber-600">Our Shop</Link>
     
      {
        user ? <>
          <button onClick={loggedOut}  className="uppercase hover:text-amber-600">Log out</button>
        </> : <>
         <Link to="/login" className="uppercase hover:text-amber-600">Log in</Link>
        </> 
      }
    </>
  );

  return (
    <div className="navbar fixed z-10 text-white bg-black max-w-screen-xl mx-auto backdrop-opacity-10">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content text-center gap-y-3 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOption}
          </ul>
        </div>

        {/* Logo / Brand */}
        <button className="btn btn-ghost leading-tight">
          BISTRO BOSS <br /> Restaurant
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-x-3">
          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
