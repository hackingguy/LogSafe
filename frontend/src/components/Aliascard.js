import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function Aliascard(props) {
  const [check, setCheck] = useState(props.active);
  const email = props.email;
  const blocked = props.blocked;
  const forward = props.forward;
  console.log(blocked);

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
    console.log(e.target.checked);
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
        console.log(data);
        if (data.error === "true") {
          error(data.message);
        } else {
          success(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mails">
      <div className="mail_item">
        <div className="email">{email}</div>
        <div className="rig">
          <label className="switch">
            <input type="checkbox" checked={check} onChange={handleChange} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div>
        <div className="email_info">
          {blocked} blocked {forward} forward
        </div>
        <div>
          <button type="button" className="btn btn-outline-danger cardbtn">
            <span>Send Email</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
