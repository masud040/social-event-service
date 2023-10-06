import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl w-[95%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
