import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <div>
        <h2>For Default users only</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
