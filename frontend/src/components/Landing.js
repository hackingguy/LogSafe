import { Link } from "react-router-dom";
import explainer from "images/explainer.png";
import NavBar from './NavBar';

export default function Landing() {
  return (
    <div>
     <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-sm ltext d-flex align-items-center">
            <div className="ltext_inner">
              <h2 className="lheading">Protect your privacy with email aliases</h2>
              <p className="lpara">
                With email aliases , you can finally create a different identity
                for each website.Defend against spams, phishing and data
                breach.Open source.Made and hosted in EU.
              </p>
              <button className="btn btn-danger lbtn">
                <Link className="link" to="/register">
                  Create an account
                </Link>
              </button>
            </div>
          </div>
          <div className="col-sm rimage d-flex justify-content-center">
            <img alt="landing " className="landing" src={explainer} />
          </div>
        </div>
      </div>
    </div>
  );
}
