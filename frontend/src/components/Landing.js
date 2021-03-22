import react from "react";
import { Link } from 'react-router-dom';

export default function Landing(){

    return(
        <div>
            <h1>Logsafe</h1>
            <div>
                <h2>some heading</h2>
                <p>
                    paragraph about our services
                    bla bla bla bla bla bla bla bla
                </p>
                <button><Link to="/login">Create an account</Link></button>
            </div>
            <div>
                <img alt="image here" />
                
            </div>
            
        </div>
    )
}