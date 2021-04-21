import React from "react";
import NavBar from "./NavBar";
import { toast, ToastContainer } from "react-toastify";
import Aliascard from "./Aliascard";
import Datablock from "./Datablock";
import axios from "axios";

export default class Landing extends React.Component {
  totalForwards = 0;
  totalBlocked = 0;
  totalAlias = 0;

  constructor() {
    super();
    this.state = {
      user: {},
      aliases: [],
    };
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  componentDidMount() {
    axios.get("/api/user").then((res) => {
      let data = res.data;
      this.totalAlias = data.aliases.length;
      console.log(data.aliases);
      data.aliases.map((alias) => {
        this.totalForwards += alias.forwards;
        this.totalBlocked += alias.blocked;
        return null;
      });

      this.setState({
        user: data.user,
        aliases: data.aliases,
      });
    });
  }

  error = (message) =>
    toast.error("❌ " + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  success = (message) =>
    toast.success("🦄 " + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  createAlias(e) {
    let alias = prompt("Enter The Custom Alias\n(Do not write @logsafe.ml)");
    if (alias === null) return;
    if (!alias || !e.validateEmail(alias + "@logsafe.ml")) {
      e.error("Invalid Email");
      return;
    }
    let aliasObj = {
      alias: alias + "@logsafe.ml",
      forwards: 0,
      blocked: 0,
      blackList: [],
      isActive: true,
    };
    axios
      .post("/api/create-alias", {
        alias: alias + "@logsafe.ml",
      })
      .then((res) => {
        let data = res.data;
        if (data.error === "true") {
          e.error(data.message);
        } else {
          e.success(data.message);
          let aliases = e.state.aliases;
          aliases.push(aliasObj);
          e.setState({
            user: e.state.user,
            aliases: aliases,
          });
        }
      })
      .catch((err) => e.error(err.response.data.message));
  }

  render() {
    return (
      <div className="back">
        <NavBar name={this.state.user.name} isLoggedIn={true} />
        <div className="main_box d-flex flex-column bd-highlight mb-3 container">
          <div className=" bd-highlight d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <Datablock data={this.totalAlias} name="aliases" />
                <Datablock data={this.totalForwards} name="forwards" />
                <Datablock data={this.totalBlocked} name="blocked" />
                <Datablock data="0" name="sent" />
              </div>
            </div>
          </div>
          <div className="mb-1 mt-4 bd-highlight d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <button
                  type="button"
                  className="btn btn-primary mr-3 btn_sec"
                  onClick={(e) => this.createAlias(this)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  New Custom Alias{" "}
                </button>
                <button type="button" className="btn btn-success ml-2 btn_sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-shuffle a"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                    />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                  </svg>{" "}
                  Random Alias
                </button>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 mb-5 mt-5 bd-highlight d-flex justify-content-left flex-wrap">
            {this.state.aliases.map((item) => (
              <Aliascard
                email={item.alias}
                blocked={item.blocked}
                forward={item.forwards}
                active={item.isActive}
                key={item._id}
              />
            ))}
          </div>
          <div className="mb-1 mt-4 bd-highlight d-flex justify-content-center">
            <button type="button" className="btn mr-2 btn-outline-danger">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>{" "}
                Prev
              </span>
            </button>
            <button type="button" className="btn btn-outline-danger">
              Next{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
