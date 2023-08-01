import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });

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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Register a new Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          name="fullName"
          type="text"
          placeholder="Full Name"
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
