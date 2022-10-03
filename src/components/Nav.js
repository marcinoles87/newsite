import React  from "react";
import { NavLink } from "react-router-dom";
import NavStyle from './NavStyle.css'

const Nav = () => {
    return ( 
        <nav className="nav">
            <ul className="logo">Logo
             
                <li>
                    <NavLink to='/' /> HomePage

                </li>
                <li>
                    <NavLink to='contact' /> Contact

                </li>
                <li>
                    <NavLink to='products'/> Products

                </li>
            </ul>

        </nav>
     );
}
 
export default Nav;