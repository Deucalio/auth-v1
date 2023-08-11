import React from "react";
import Navbar from "./layout/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [offers, setOffers] = useState([]);

  // fetch all offers
  useEffect(() => {
    let ignore = false;
    const fetchOffers = async () => {
      const response = await axios.get("http://localhost:5000/offer");
      console.log("res",response.data)
      // withCredentials: true is needed to send the cookie
      setOffers(response.data);
    };

    if (!ignore) {
      fetchOffers();
    }

    // cleanup function to avoid memory leaks
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
