import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Verify() {
  let error = (message) =>
    toast.error("❌" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  let success = (message) =>
    toast.success("🦄" + message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  useEffect(() => {
    let host = window.location.href;
    let token = host.split("verify/")[1].split("/")[0];
    if (!token) {
      error("Token Required");
    } else {
      fetch(`https://api.logsafe.ml/verify/${token}`, {
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => {
          if (res["error"] === "true") {
            error(res.message);
          } else {
            success(res.message);
          }
          setTimeout(() => {
            window.location = "/login";
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>Verifying Email.....</h1>
      <ToastContainer />
    </div>
  );
}
