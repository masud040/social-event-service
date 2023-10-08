import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Log out successfully"))
      .catch((err) => toast.error(err.message));
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "flex items-center text-gray-700 font-semibold transition-all  bg-rose-300 rounded-md px-2 py-1 "
            : ""
        }
      >
        Home
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "flex transition-all items-center text-gray-700 font-semibold bg-rose-300 rounded-md px-2 py-1"
                : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "flex transition-all items-center bg-rose-300 rounded-md px-2 py-1 text-gray-700 font-semibold"
                : ""
            }
          >
            Contact Us
          </NavLink>
        </>
      )}

      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "flex items-center text-gray-700 font-semibold transition-all bg-rose-300 rounded-md px-2 py-1 "
            : ""
        }
      >
        Blog
      </NavLink>
    </>
  );
  return (
    <div
      className="mx-auto  w-full  
  py-2 mb-2 shadow-md"
    >
      <Toaster />
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <button className="relative ml-auto h-6 max-h-[40px] max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none none md:hidden">
            <span
              onClick={() => setShow(!show)}
              className="absolute top-1/2 right-[260px] -translate-y-1/2 -translate-x-1/2 transform text-2xl"
            >
              {show ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
          </button>
          <ul className="hidden items-center gap-6 md:flex">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent mr-6">
              Social Event
            </h1>
            {navLinks}
          </ul>
          {user ? (
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-2 z-[1] p-1  dropdown-content menu rounded-md bg-gray-100 "
              >
                <li>
                  <Link>{user?.displayName}</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "flex transition-all items-center text-gray-700 font-semibold bg-rose-300 rounded-md px-2 py-1"
                  : ""
              }
            >
              Login
            </NavLink>
          )}
        </div>
        <div
          className={
            show
              ? "block w-full basis-full overflow-hidden text-gray-900 transition-all duration-700 ease-in lg:hidden"
              : "block w-full h-0 basis-full overflow-hidden text-gray-900 transition-all duration-300 ease-in lg:hidden"
          }
        >
          <div className="container   mx-auto">
            <ul className=" mb-2 flex flex-col md:hidden gap-1">{navLinks}</ul>

            <Link to={"/login"}>
              <button
                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 md:hidden disabled:shadow-none"
                type="button"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
