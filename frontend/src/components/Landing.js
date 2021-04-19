import { Link } from "react-router-dom";
import explainer from "images/explainer.png";
import logo from "images/logo our.png";

export default function Landing() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  topmenu">
        <a class="navbar-brand" href="/">
          <img src={logo} className="toplogo" alt="/"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <form class="d-flex justify-content-center">
            <a href="/">
              <button class="btn btn-outline-danger  ml-5 mb-1" type="button">
                Log Out
              </button>
            </a>

            <a href="# ">
              <button
                class="btn btn-outline-danger active  ml-4 mr-5"
                type="button"
              >
                Login
              </button>
            </a>
          </form>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm ltext d-flex align-items-center">
            <div class="ltext_inner">
              <h2 class="lheading">Protect your privacy with email aliases</h2>
              <p class="lpara">
                With email aliases , you can finally create a different identity
                for each website.Defend against spams, phishing and data
                breach.Open source.Made and hosted in EU.
              </p>
              <button class="btn btn-danger lbtn">
                <Link class="link" to="/login">
                  Create an account
                </Link>
              </button>
            </div>
          </div>
          <div class="col-sm rimage d-flex justify-content-center">
            <img alt="landing " class="landing" src={explainer} />
          </div>
        </div>
      </div>
    </div>
  );
}
