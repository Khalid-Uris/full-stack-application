import React from "react";

const DefaultLayout = () => {
  return (
    <div>
      <div>
        <h2>For guest users only</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
