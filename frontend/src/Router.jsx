import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import LogOutBtn from "./components/auth/LogOutBtn";
import PostOffer from "./components/PostOffer";
import Home from "./components/Home";

const Router = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        {!loggedIn && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        {loggedIn && (
          <>
            <Route path="/post-offer" element={<PostOffer/>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
