import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
    this.error = this.error.bind(this);
    this.success = this.success.bind(this);
  }

  //error toast
  error = (message) =>
    toast.error("❌" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  success = (message) =>
    toast.success("🦄" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  update = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  displayLogin(e) {
    e.preventDefault();
    let { fullname, email, password } = this.state;
    console.log("sending reqest", email, password);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fullname, email: email, password: password })
    };
    fetch("https://api.logsafe.ml/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error === "true") {
          //console.log("error present")
          this.error(data.message);
        } else {
          console.log("No Error");
          this.success(data.message);
        }
      })
      .catch(console.log("Bad connection"));
  }

  render() {
    return (
      <div className="register">
        <h1>Logsafe</h1>
        <form onSubmit={this.displayLogin}>
          <h2>Register</h2>
          <div className="name">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={this.state.fullname}
              onChange={this.update}
            />
          </div>

          <div className="email">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.update}
            />
          </div>

          <div className="pasword">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.update}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password1"
            />
          </div>

          <input type="submit" value="Login" />
          <p>
            don't have account?<Link to="/login">Create an account</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default Register;
