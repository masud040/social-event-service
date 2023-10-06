import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
export default route;
