import React  from "react";
import MainStyle from './MainStyle.css'

const Main = () => {
    return ( 
        <div className="main">
            <h1> Contact Us !</h1>

            <form className="contact">
            <input placeholder="name"></input>
            <input placeholder="date"></input>
            <input placeholder="chosse destiny"></input>
            <textarea></textarea>
            </form>
            

        </div>
     );
}
 
export default Main;