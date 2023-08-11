import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import authContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { getLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   const registerData = userInfo;

      const response = await axios.post(
        "http://localhost:5000/auth/login",
        userInfo
      );
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login to your account</h1>

            <input
              onChange={handleChange}
              name="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={handleChange}
              name="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="password"
              placeholder="Password"
            />
            <p className="text-center">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="border-b-2 border-pink-500 text-pink-600"
              >
                Register Now
              </NavLink>
            </p>

            <button
              onClick={handleSubmit}
              className="w-full text-center my-8 py-3 rounded bg-pink-500 text-white  hover:bg-pink-600 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
