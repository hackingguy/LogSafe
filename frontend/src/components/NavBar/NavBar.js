import React from 'react';
import logo from "../../images/logo.png";
import './NavBar.css'
console.log("Hello World");
class NavBar extends React.Component {
    render(){
        return (
            <div className="nav-bar">
                <img alt="logo" src={logo}/>  
                <div className="href-links">
                    <ul>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
         );
    }
}

export default NavBar;