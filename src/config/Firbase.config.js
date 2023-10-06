import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAT6H2bd-717JTCuwqzbvIW2yeUVqh2Qv4",
  authDomain: "react-glasses-1dc5d.firebaseapp.com",
  projectId: "react-glasses-1dc5d",
  storageBucket: "react-glasses-1dc5d.appspot.com",
  messagingSenderId: "452436605875",
  appId: "1:452436605875:web:24b083be3da25bd522e9c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
