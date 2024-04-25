import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
import Admin from "../pages/Admin";
import ProductDetails from "../components/ProductDetails";
import DashBoard from "../components/admin/DashBoard";
import Product from "../components/admin/Product";
import AddProduct from "../components/admin/AddProduct";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="product" element={<Product />} />
          <Route path="add-products" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
