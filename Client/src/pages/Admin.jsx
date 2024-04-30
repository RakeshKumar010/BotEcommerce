import React, { useEffect } from "react";
import SideBar from "../components/admin/SideBar";
import { Outlet } from "react-router-dom";

const Admin = () => {
 
 
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Admin;
