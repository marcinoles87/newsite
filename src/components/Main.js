import React , {useState} from "react";
import MainStyle from './MainStyle.css'

const Main = () => {
    const [username , setUserName] = React.useState('');

 

  

 
    return ( 
        <div className="main">
            <h1> Contact Us !</h1>

            <form className="contact">
                <label>Your name :</label>
            <input type="text" className="contactName" placeholder="name" name="username" value={username} ></input>
                <label> Trip Date :</label>
            <input type="date" className="contactDate" placeholder="date"></input>
                <label> Chosse Destiny :</label>
            <input className="contactDestiny" placeholder="chosse destiny"></input>
                <label> Your Messege :</label>
            <textarea className="contactMessage"> </textarea>
            <button className="buttonSubmit" type="submit" onClick={ () => setUserName(username + ' new')}>Send</button>
           

            </form>
            

        </div>
     );
}
 
export default Main;