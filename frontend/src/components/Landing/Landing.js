import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import landing from "../../images/landing.png";
import './Landing.css'

export default function Landing(){
    return(
        <div>
            <NavBar></NavBar>
            <div className="hero-section">
                <div className="hero-text">
                    <div>
                    <h2>Protect your privacy with email aliases</h2>
                    <p>
                    With email aliases , you can finally create a different identity for each website. Defend against spams, phishing and data breach. Open-source.
                    </p>
                    </div>
                    <Link to="/register">Get Started</Link>
                </div>
                <div className="hero-img">
                    <img alt="logo" src={landing} />
                </div>
            </div>
        </div>
    )
}