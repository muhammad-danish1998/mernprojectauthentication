import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
const {state , dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const LogoutData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        Credential: "include",
        // body: JSON.stringify({ name, email, phone, work, password, cpassword }),
      };
      const res = await fetch("/logout", requestOptions);

      if (res) {
      dispatch({type : "USER" , payload:false})

        navigate("/signin");
      } else if (res.status != 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LogoutData();
  });
  return <div>Logout</div>;
};

export default Logout;
