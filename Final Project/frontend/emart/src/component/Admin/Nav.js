import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from "../../services/auth-service";
import { useState, useEffect } from "react";

const Navbar = () => {    
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
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">ALLONE COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Customers</NavLink>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className="buttons">
                        {currentUser && (<>                          
                        <NavLink to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1" onClick ={logOut}> Logout </i>
                        </NavLink>
                        </> 
                        )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;