import React, {Fragment} from "react";
import './Navbar.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const {isAuth} = useSelector(state => state.app)
    return (
        <nav className="app__navbar">
            {
                isAuth ? (<NavLink to="/content__pass" className="navbar__pass">Change Password</NavLink>) : (
                    <Fragment>
                        <NavLink to="/content__reg" className="navbar__reg">Registration</NavLink>
                        <NavLink to="/content__login" className="navbar__login">Login</NavLink>
                    </Fragment>
                )
            }
        </nav>
    )
}

export default Navbar;