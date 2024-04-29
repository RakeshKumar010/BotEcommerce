import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
import Admin from "../pages/Admin";
import ProductDetails from "../components/ProductDetails";
import DashBoard from "../components/admin/DashBoard";
import Product from "../components/admin/Product";
import AddProduct from "../components/admin/AddProduct";
import NewArrival from "../pages/NewArrival";
import OrderPage from "../pages/OrderPage";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path=":id/buy-now" element={<OrderPage />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="new-arrivals" element={<NewArrival title={'NEW ARRIVALS'} />} />
        <Route path="/suit-sets" element={<NewArrival  title={'SUIT SETS'}/>} />
        <Route path="/celebrity-stylists" element={<NewArrival  title={'CELEBRITY STYLISTS'}/>} />
        <Route path="/best-seller" element={<NewArrival  title={'BEST SELLER'}/>} />
        <Route path="/lehenga-sets" element={<NewArrival  title={'LEHENGA SETS'}/>} />
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
