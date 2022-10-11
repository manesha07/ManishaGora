// import React from 'react';

// const Navbar = () => {
//     return(
//         <div>

//         </div>
//     );
// }
// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthService from "../services/auth-service";
import { useState, useEffect } from "react";

const Navbar = () => {
    const store = useSelector((store) => store.handleCart);
    
  const [currentUser, setCurrentUser] = useState(undefined);
  console.log("currenttt",currentUser);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  };
    return (
        <header class="container clearfix">
        <div class="main-head container">
            <div class="head clearfix">
                <span class="logo"> <a href="/"> <span class="highlight-color"> All </span>one
                </a>
                </span>
                <div class="nav small-content">
                    <ul class="nav_list clearfix">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Our Products</a></li>

                        {/* {console.log("hi user",currentUser.user.currentUser === 'customer')} */}
                     {currentUser ? (
                     currentUser.user.currentUser === 'customer'?
                     <>
                     {/* <li><a href="/myorders">My Orders</a></li> */}
                 <NavLink to="/cart" >
                      <i className="fa fa-shopping-cart "> <li class=" small-content"> Cart({store.length}) </li> </i>
                     </NavLink>                           
                     <NavLink to="/login">
                          <i className="fa fa-sign-in" onClick ={logOut}><li class="last small-content">  Logout </li></i>
                         </NavLink>
                       </>:<>
                                 <NavLink to="/dashboard" >
                                 <i className="fa fa-shopping-cart "> <li class=" small-content"> Dashboard </li> </i>
                                </NavLink>                           
                                <NavLink to="/login">
                                     <i className="fa fa-sign-in" onClick ={logOut}><li class="last small-content">  Logout </li></i>
                                    </NavLink>
                                    </> 
                    ): 
                       <>
                        <NavLink to="/register" className="">
                                <li class=" small-content"> Sign Up <i className="fa fa-user-plus"></i></li> 
                        </NavLink>
                        <div className="dropdown"><li class="last small-content dropbtn">
                                Login <i className="fa fa-user-plus"></i>
                               <div class="dropdown-content">
                                   <a href="/login">Admin </a>
                                    <a href="/customerlogin">Customer </a>
                                    </div>

                                </li>
                               </div>
                        </>}
                    </ul>
                </div>
                <div class="head-icons">
                    {/* <a href="/home">
                        <img src="images/Mask.png" class="large-icon mask" alt="brightness" />
                    </a>
                    <a href="/home">
                        <img src="images/Menu.png" class="large-icon bars" alt="bars" />
                    </a> */}
                </div>
            </div>
        </div>
    </header>
    );
}
export default Navbar;