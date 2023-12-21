/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import {  useNavigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const navigate = useNavigate()
//   const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex mx-auto items-center h-screen"></span>
    );
    }
    if (!user) {
        navigate('/login')
    }
  if (user) {
    return children;
  } 
};

export default PrivetRoute;
