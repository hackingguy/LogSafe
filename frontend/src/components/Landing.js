
import { Link } from 'react-router-dom';
import explainer from 'images/explainer.png'
import logo from "images/logo our.png"


export default function Landing(){

    return(
        <div>
            <div className="navbar">
                <img alt="logo" src={logo} />
                <div className="nav-right">
                    <Link className="log-link" to="/login">login</Link>
                    <button className="nav-btn"><Link className="link" to="/register">Sign Up</Link></button>
                </div>
            </div>
            
            <div className="main">
                <div className="left">
                    <h2>Protect your privacy with email aliases</h2>
                    <p>
                    With email aliases , you can finally create a different identity for each website.Defend against spams, phishing and data breach.Open source.Made and hosted in EU
                    </p>
                    <button className="btn"><Link className="link" to="/login">Create an account</Link></button>
                </div>
                <div className="right">
                    <img alt="landing page" src={explainer} />
                </div>
            </div>
        </div>
    )
}