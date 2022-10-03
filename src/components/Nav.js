import React  from "react";
import { NavLink , Link} from "react-router-dom";
import NavStyle from './NavStyle.css'

const Nav = () => {
    return ( 
        <nav className="nav">
            <ul className="logo">Logo
             
                <li>
                    <Link to='/' > HomePage </Link>

                </li>
                <li>
                    <Link to='contact' > Contact </Link>

                </li>
                <li>
                    <Link to='products'> Products </Link>

                </li>
            </ul>

        </nav>
     );
}
 
export default Nav;