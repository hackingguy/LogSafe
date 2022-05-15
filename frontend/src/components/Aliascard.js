import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Aliascard(props) {

  const [check, setCheck] = useState(props.aliasCard.isActive);
  const {_id, alias, blocked, forwards, isBlackList} = props.aliasCard; 

  const blackList = props.blackList;

  const error = (message) =>
    toast.error("❌" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
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

  const handleChange = () => {
    setCheck(!check);
    props.handleCheckAlias(check);
    axios
      .post(
        `/api/toggle-alias`,
        {
          alias: alias,
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
          if(check){
            props.handleActiveChange(-1);
          }
          else {
            props.handleActiveChange(+1);
          }
        }
      })
      .catch((err) => this.error(err.response.data.message));
  };

  const handleDeleteAlias= () => {
      axios.post("/api/delete-alias",{
          alias : alias,
          userID : _id,
        }
      )
      .then((res)=>{
        let data = res.data;
        if (data.error === "true") {
          error(data.message);
        } else {
          success(data.message);
          props.handleAliasChange(-1);
          props.handleActiveChange(-1);
          props.handleDeleteChange(_id);
        }
      })
      .catch((err) => this.error(err.response.data.message));
  };

  const handleBlackListAlias= () => {
      axios.post("/api/blacklist",{
          alias : alias,
          blackList : blackList,
          isBlackList : isBlackList,
        }
      )
      .then((res)=>{
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
        <div className="email">{alias}</div>
        <div className="rig">
          <label className="switch mb-0">
            <input type="checkbox" checked={check} onChange={handleChange} />
            <span className="slider round" />
          </label>
        </div>
      </div>
      <div>
        <div className="email_info">
          {blocked} blocked, {forwards} forward
        </div>
        <div className="trash-icon">
          <button type="button" className="btn btn-outline-danger cardbtn top-0 start-0 p-0"
            onClick={handleDeleteAlias} > Delete
          </button>
        </div>
        <div className="trash-icon">
          <button type="button" className="btn btn-outline-danger cardbtn top-0 start-0 p-0"
            onClick={handleBlackListAlias}> BlackList
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}