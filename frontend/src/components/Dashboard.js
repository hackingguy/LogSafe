import React from "react";
import logo from "../images/logo our.png";
import Aliascard from "./Aliascard";
import Datablock from "./Datablock";
import axios from "axios";

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      aliases: [],
    };
  }

  componentDidMount() {
    axios.get("/api/user").then((res) => {
      let data = res.data;
      console.log(data.aliases);
      this.setState({
        user: data.user,
        aliases: data.aliases,
      });
    });
  }

  render() {
    return (
      <div className="back">
        <nav className="navbar navbar-expand-lg navbar-light  topmenu">
          <a className="navbar-brand" href="/">
            <img src={logo} className="toplogo" alt="logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <form className="d-flex justify-content-center">
              <a href="/">
                <button className="btn btn-outline  ml-5 mb-1" type="button">
                  {this.state.user.name}
                </button>
              </a>

              <a href="# ">
                <button
                  className="btn btn-outline-danger active  ml-4 mr-5"
                  type="button"
                >
                  Log out
                </button>
              </a>
            </form>
          </div>
        </nav>
        <div className="main_box d-flex flex-column bd-highlight mb-3 container">
          <div className=" bd-highlight d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <Datablock data="1" name="aliases" />
                <Datablock data="0" name="forwards" />
                <Datablock data="0" name="blocked" />
                <Datablock data="1" name="sent" />
              </div>
            </div>
          </div>
          <div className="mb-1 mt-4 bd-highlight d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <button type="button" className="btn btn-primary mr-3 btn_sec">
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
                  New Custom Alilas{" "}
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
                  Random Alilas
                </button>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 mb-5 bd-highlight d-flex justify-content-left flex-wrap">
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
      </div>
    );
  }
}
