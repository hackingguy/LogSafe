import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);

    this.error = this.error.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
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

  displayLogin(e) {
    e.preventDefault();
    let { email, password } = this.state;
    axios
      .post(
        `/api/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        let data = res.data;
        if (data.error === "true") {
          this.error(data.message);
        } else {
          this.success(data.message);
          window.location = "/dashboard";
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="login">
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
                    <h4 className="card-title">Login</h4>
                    <form
                      className="my-login-validation"
                      noValidate=""
                      onSubmit={this.displayLogin}
                    >
                      <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={this.state.email}
                          required
                          autoFocus
                          onChange={this.update}
                        />
                        <div className="invalid-feedback">Email is invalid</div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">
                          Password
                          <a href="forgot.html" className="float-right">
                            Forgot Password?
                          </a>
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          data-eye
                          value={this.state.password}
                          required
                          autoFocus
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
                            name="remember"
                            id="remember"
                            className="custom-control-input"
                          />
                          <label
                            htmlFor="remember"
                            className="custom-control-label"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Login
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Don't have an account?{" "}
                        <Link
                          class="link"
                          to="/register"
                          style={{ font: "roboto", color: "black" }}
                        >
                          Create One
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

export default Login;
