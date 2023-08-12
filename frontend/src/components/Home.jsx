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
      console.log("res", response.data);
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
      <section className="flex h-full flex-col px-10 py-3">
        <div className="box flex h-8 flex-row rounded border-2 border-gray-200 border-opacity-40 bg-gray-100 shadow-sm shadow-slate-400 md:mx-auto md:h-9 md:w-2/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="magnifier h-7 w-6 bg-gray-200 text-gray-600 transition-all focus-within:bg-slate-200 md:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            placeholder="Search for Products"
            type="text"
            className="w-full border-0 bg-transparent pl-2 text-slate-950 outline-none ring-0 placeholder:transition-all placeholder:duration-500 focus:placeholder:opacity-50"
          />
        </div>

        <div className="mx-auto my-9 flex h-full w-11/12 flex-col rounded-md bg-gray-50 py-6 shadow-md ring-1 ring-slate-300 md:w-3/4">
          <p className="-translate-y-3 text-center font-medium md:px-6 md:text-left md:text-lg">
            Top Results
          </p>
          {/* <article className="h-96 sm:h-72 transition-all hover:cursor-pointer hover:bg-gray-100 md:h-64">
            <ul className="flex h-full flex-col gap-3 border-y-[1px] border-zinc-300 px-4 py-3 sm:px-6">
              <li className="text-xl font-medium tracking-tight text-blue-500 md:text-2xl">
                Pixel 6
              </li>
              <li className="">
                <span className="">Target Price: </span>{" "}
                <span className="font-semibold">5000 Rs</span>
              </li>
              <li className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident officiis doloremque facilis tenetur? Deserunt
                consequatur doloremque impedit vitae veritatis quidem non
                nesciunt, consectetur harum cumque! Quis porro saepe consequatur
                eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Praesentium maiores quibusdam corporis officia, blanditiis
                veritatis soluta, voluptatibus ab omnis similique aperiam harum.
                Soluta voluptatem eligendi veritatis saepe cum sapiente placeat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                iste, officia excepturi maxime quam ipsa expedita nulla mollitia
                consequatur voluptatum ab corporis unde maiores rem quibusdam?
                Similique architecto molestiae impedit.
              </li>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-0">
                <li className="font-medium">No Biddings yet</li>
                <li className="font-medium">Posted: 15 minutes ago</li>
              </div>
            </ul>
          </article> */}

          
        </div>
      </section>
    </>
  );
};

export default Home;
