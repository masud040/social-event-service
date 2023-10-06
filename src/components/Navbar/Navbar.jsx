import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Toaster } from "react-hot-toast";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const navLinks = (
    <>
      <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex items-center"
              : isActive
              ? "flex items-center text-green-500"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex items-center"
              : isActive
              ? "flex items-center text-green-500"
              : ""
          }
        >
          Events
        </NavLink>
      </li>
      <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex items-center"
              : isActive
              ? "flex items-center text-green-500"
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex items-center"
              : isActive
              ? "flex items-center text-green-500"
              : ""
          }
        >
          Details
        </NavLink>
      </li>
    </>
  );
  return (
    <nav
      className="mx-auto block w-full  
 bg-opacity-80 py-2 px-4  backdrop-blur-2xl backdrop-saturate-200  lg:py-4 "
    >
      <Toaster />
      <div>
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <button className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden ">
            <span
              onClick={() => setShow(!show)}
              className="absolute top-1/2 right-[500px] -translate-y-1/2 -translate-x-1/2 transform text-2xl"
            >
              {show ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
          </button>
          <ul className="hidden items-center gap-6 lg:flex">{navLinks}</ul>

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            ></label>
          </div>

          <button
            className="middle none center  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          </button>
        </div>
        <div
          className={
            show
              ? "block w-full basis-full overflow-hidden text-gray-900 transition-all duration-700 ease-in lg:hidden"
              : "block w-full h-0 basis-full overflow-hidden text-gray-900 transition-all duration-300 ease-in lg:hidden"
          }
        >
          <div className="container mx-auto">
            <ul className=" mb-2 flex flex-col gap-1">{navLinks}</ul>

            <Link to={"/login"}>
              <button
                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
