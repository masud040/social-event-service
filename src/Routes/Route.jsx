import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default route;
