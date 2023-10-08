import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";

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
      {
        path: "/eventDetails/:id",
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../event_data.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
        loader: () => fetch("../team.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
export default route;
