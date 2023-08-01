import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
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
        "http://localhost:5000/auth/login",
        userInfo
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
