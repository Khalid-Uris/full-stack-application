import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <div>
        <h2>For guest users only</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
