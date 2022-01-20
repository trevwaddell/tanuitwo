import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity";
import { func } from "../../types";

export default function PrivateRoute() {
  const identity = useIdentityContext();

  return identity.user ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
}

PrivateRoute.propTypes = {
  component: func,
};
