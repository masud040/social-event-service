import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
