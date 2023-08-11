import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);
  // style={({ isActive }) => ({ fontWeight: isActive ? "700" : "100" })}
  return (
    <>
      <div className="flex h-full flex-col items-center justify-between gap-6 bg-slate-950 px-8 py-6 text-base tracking-tighter text-gray-200 md:h-14 md:flex-row">
        <div className="flex flex-row items-center gap-8 md:mr-80">
          <NavLink
            to={"/"}
            style={({ isActive }) => ({ fontWeight: isActive ? "700" : "100" })}
          >
            <button className="hover:underline">Home</button>
          </NavLink>

          {loggedIn ? (
            <>
              <button className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="hover:underline">Profile</span>
              </button>
              <NavLink
                to={"/post-offer"}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "700" : "100",
                })}
              >
                {" "}
                <button className="w-28 rounded-sm bg-pink-600 px-3 py-1 font-semibold text-white hover:bg-pink-700 md:w-full">
                  Post an Offer
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>
                <button className="bg-blue-700 rounded-sm font-semibold hover:bg-blue-800 px-2 py-1">
                  Login
                </button>
              </NavLink>

              <NavLink to={"/register"}>
                {" "}
                <button className="w-28 rounded-sm bg-pink-600 px-3 py-1 font-semibold text-white hover:bg-pink-700 md:w-full">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
        {loggedIn ? <LogOutBtn /> : null}
      </div>
    </>
  );
};

{
  /* <div class="flex h-full flex-col items-center justify-between gap-6 bg-slate-950 px-8 py-6 text-base tracking-tighter text-gray-200 md:h-14 md:flex-row">
  <div class="flex flex-row items-center gap-8 md:mr-80">
    <a class="" href="/" style="font-weight: 100;"><button class="hover:underline">Home</button></a>

    <button class="flex flex-row items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span class="hover:underline">Profile</span>
    </button>
    <a class="active" href="/offers" style="font-weight: 700;" aria-current="page"> <button class="w-28 rounded-sm bg-pink-600 px-3 py-1 font-semibold text-white hover:bg-pink-700 md:w-full">Post an Offer</button></a>
  </div>
  <button class="rounded-md bg-red-700 px-4 py-2 text-center font-semibold hover:bg-red-800 translate-y-4 md:translate-y-0">Log out</button>
</div> */
}

// <div class="flex h-full flex-col items-center justify-between gap-6 bg-slate-950 px-8 py-6 text-base tracking-tighter text-gray-200 md:h-14 md:flex-row">
//   <div class="flex flex-row items-center gap-8 md:mr-80">
//     <a class="" href="/" style="font-weight: 100;"><button class="hover:underline">Home</button></a>

//     <button class="flex flex-row items-center gap-1">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span class="hover:underline">Profile</span>
//     </button>
//     <a class="active" href="/offers" style="font-weight: 700;" aria-current="page"> <button class="w-28 rounded-sm bg-pink-600 px-3 py-1 font-semibold text-white hover:bg-pink-700 md:w-full">Post an Offer</button></a>
//   </div>
//   <button class="rounded-md bg-red-700 px-4 py-2 text-center font-semibold hover:bg-red-800 translate-y-4 md:translate-y-0">Log out</button>
// </div>

export default Navbar;
