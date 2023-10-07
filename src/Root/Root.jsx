import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl w-[90%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
