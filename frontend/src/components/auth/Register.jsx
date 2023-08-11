import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    address: "",
    province: "",
    city: "",
  });

  const { getLoggedIn } = useContext(AuthContext);
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
        "http://localhost:5000/auth",
        userInfo,
        {
          // it will send the cookie to the backend server
          // and the backend server will set the cookie
          // in the browser
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      getLoggedIn();
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
          <div className="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              onChange={handleChange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullName"
              placeholder="Full Name"
            />

            <input
              onChange={handleChange}
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              onChange={handleChange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="address"
              placeholder="Address"
            />
            <input
              onChange={handleChange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="province"
              placeholder="Province"
            />
            <input
              onChange={handleChange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="city"
              placeholder="City"
            />

            <input
              onChange={handleChange}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              onChange={handleChange}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
            />

            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full text-center my-8 py-3 rounded bg-pink-500 text-white  hover:bg-pink-600 focus:outline-none"
            >
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-2 mb-16">
            Already have an account? &nbsp;
            <Link
              to="/login"
              className=" border-b-2 border-pink-500 text-pink-600"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
