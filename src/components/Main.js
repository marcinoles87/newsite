import React  from "react";
import MainStyle from './MainStyle.css'

const Main = () => {
    return ( 
        <div className="main">
            <h1> Contact Us !</h1>

            <form className="contact">
            <input className="contactName" placeholder="name"></input>
            <input className="contactDate" placeholder="date"></input>
            <input className="contactDestiny" placeholder="chosse destiny"></input>
            <textarea className="contactMessage"></textarea>
            <button className="buttonSubmit">Send</button>
            </form>
            

        </div>
     );
}
 
export default Main;