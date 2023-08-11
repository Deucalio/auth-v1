import axios from "axios";
import React from "react";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    navigate("/");
  }

  return (
    <>
      <button
        className="rounded-md bg-red-700 px-4 py-2 text-center font-semibold hover:bg-red-800 translate-y-4 md:translate-y-0"
        onClick={logOut}
      >
        Log out
      </button>
    </>
  );
};

export default LogOutBtn;
