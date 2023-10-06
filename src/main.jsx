import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
