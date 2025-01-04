import React, { useContext } from "react";
import { stateContext } from "../../Context/StateContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function AuthPrivateRoute({ children }) {
  const { user, loading } = useContext(stateContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return <Navigate to={`${location?.state?.his || "/"}`}></Navigate>;
  }
  if (!user && !loading) {
    return children;
  }
}
