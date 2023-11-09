import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = ({ children, loggedIn, ...props }) => {
  return (
    <Route {...props}>{loggedIn ? children : <Redirect to={"/"} />}</Route>
  );
};

export default ProtectedRoute;