import React from "react";
import SideBar from "../components/admin/SideBar";
import DashBoard from "../components/admin/DashBoard";
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
