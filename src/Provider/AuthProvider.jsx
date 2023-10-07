import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../config/Firbase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithSocial = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    register,
    loginWithSocial,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
