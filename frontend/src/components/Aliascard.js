import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function Aliascard(props) {
  const [check, setCheck] = useState(props.active);
  const email = props.email;
  const blocked = props.blocked;
  const forward = props.forward;

  const error = (message) =>
    toast.error("❌" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const success = (message) =>
    toast.success("🦄" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleChange = (e) => {
    setCheck(!check);

    axios
      .post(
        `/api/toggle-alias`,
        {
          alias: email,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        let data = res.data;
        if (data.error === "true") {
          error(data.message);
        } else {
          success(data.message);
        }
      })
      .catch((err) => this.error(err.response.data.message));
  };

  return (
    <div className="mails p-4">
      <div className="mail_item">
        <div className="email">{email}</div>
        <div className="rig">
          <label className="switch mb-0">
            <input type="checkbox" checked={check} onChange={handleChange} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div>
        <div className="email_info">
          {blocked} blocked, {forward} forward
        </div>
        <div>
          <button type="button" className="btn btn-outline-danger cardbtn top-0 start-0 p-0">
            Send Email
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
