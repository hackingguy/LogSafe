import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../App.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
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
      progress: undefined,
    });

  success = (message) =>
    toast.success("🦄" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  update = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  displayLogin(e) {
    e.preventDefault();
    let { fullname, email, password } = this.state;
    console.log("sending reqest", email, password);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullname,
        email: email,
        password: password,
      }),
    };
    fetch(`/api/register`, requestOptions)
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
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <h1
                  style={{
                    color: "#f3783f",
                    textAlign: "center",
                    marginTop: 100,
                  }}
                >
                  Logsafe
                </h1>
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    <form
                      className="my-login-validation"
                      noValidate=""
                      onSubmit={this.displayLogin}
                    >
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="name"
                          required
                          autoFocus
                          value={this.state.fullname}
                          onChange={this.update}
                        />
                        <div className="invalid-feedback">
                          What's your name?
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          required
                          value={this.state.email}
                          onChange={this.update}
                        />
                        <div className="invalid-feedback">
                          Your email is invalid
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          data-eye
                          value={this.state.password}
                          onChange={this.update}
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className="custom-control-input"
                            required=""
                          />
                          <label
                            htmlFor="agree"
                            className="custom-control-label"
                          >
                            I agree to the <a href="#">Terms and Conditions</a>
                          </label>
                          <div className="invalid-feedback">
                            You must agree with our Terms and Conditions
                          </div>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Already have an account?{" "}
                        <Link
                          class="link"
                          to="/login"
                          style={{ font: "roboto", color: "black" }}
                        >
                          click here
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="footer">
                  Copyright &copy; 2017 &mdash; Logsafe
                </div>
              </div>
            </div>
          </div>
        </section>

        <ToastContainer />
      </div>
    );
  }
}

export default Register;
