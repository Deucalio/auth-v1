import React from "react";
import { useState } from "react";
import axios from "axios";

const PostOffer = () => {
  const [offer, setOffer] = useState({
    user: "",
    product: "",
    description: "",
    quantity: "",
    targetPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = async () => {
    // call api to post offer
    const req = await axios.post("http://localhost:5000/offer", offer);
    console.log(req);

  }

  return (
    <>
      <main className="relative h-[75vh] flex flex-col justify-center px-6 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute h-8 w-8 text-gray-300 hover:text-gray-500 transition-all top-0 left-0 hover:cursor-pointer m-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>

        <div className=" border-rose-600 w-fit mx-auto mb-24 text-gray-300">
          <p className="border-b-2 border-gray-500 sm:w-80 text-center text-2xl font-semibold tracking-wide ">
            Tell us what you need
          </p>
        </div>
      </main>

      <section className="h-full pb-8 w-5/6 lg:w-2/4 bg-white rounded-md border-2 border-gray-300 border-opacity-70 mx-auto -translate-y-56 shadow-xl">
        <div className="pl-4 py-6 flex flex-col gap-6 text-black font-semibold text-xl mr-2">
          <input
            onChange={handleChange}
            name="product"
            maxLength="30"
            className="placeholder:text-slate-600 placeholder:font-semibold  placeholder:opacity-60 placeholder:tracking-tighter outline-0 ring-0  bg-transparent border-b-2 border-slate-500 border-opacity-40 transition-all duration-500 focus:placeholder:opacity-20 focus:placeholder:transition-all focus:placeholder:duration-500 focus:border-opacity-100  active:border-blue-600 focus:border-blue-600"
            type="text"
            placeholder="Enter the Product Name"
          />

          <div className="flex flex-col gap-3 my-7">
            <label className="text-slate-600 font-semibold opacity-80">
              Describe your product in detail:
            </label>
            <textarea
              onChange={handleChange}
              name="description"
              placeholder="I want xyz at the rate that I mentioned below..."
              className="placeholder:text-base ring-0 outline-0 bg-transparent border-2 border-gray-300 h-28 focus:border-blue-600 transition-all duration-700 focus:opacity-100 resize-none text-base"
            ></textarea>
          </div>

          <input
            onChange={handleChange}
            name="quantity"
            className="placeholder:text-slate-600 placeholder:font-semibold  placeholder:opacity-70 outline-0 ring-0 placeholder:tracking-tighter bg-transparent border-b-2 border-slate-500 border-opacity-50 transition-all duration-500 focus:placeholder:opacity-20 focus:placeholder:transition-all focus:placeholder:duration-500 focus:border-opacity-100  active:border-blue-600 focus:border-blue-600"
            type="number"
            placeholder="Quantity"
          />

          <input
            onChange={handleChange}
            name="targetPrice"
            className="placeholder:text-slate-600 placeholder:font-medium  placeholder:opacity-70 outline-0 ring-0 placeholder:tracking-tighter bg-transparent border-b-2 border-slate-500 border-opacity-40 transition-all duration-500 focus:placeholder:opacity-20 focus:placeholder:transition-all focus:placeholder:duration-500 my-6 focus:border-opacity-100  active:border-blue-600 focus:border-blue-600"
            type="number"
            placeholder="Target Price"
          /> 
        </div>

        <button onClick={handleSubmit} className="ml-3 border-sky-40 w-24 shadow-sm rounded-md  py-3 px-2 font-bold text-base bg-pink-500 text-white hover:bg-pink-600 ">
          Submit
        </button>
        <span className="font-semibold text-base">Press Submit</span>
      </section>
    </>
  );
};

export default PostOffer;
