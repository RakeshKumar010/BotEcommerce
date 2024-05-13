import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
import Admin from "../pages/Admin";
import ProductDetails from "../components/ProductDetails";
import DashBoard from "../components/admin/DashBoard";
import Product from "../components/admin/Product";
import AddProduct from "../components/admin/AddProduct";
import NewArrival from "../pages/NewArrival";
import OrderPage from "../pages/OrderPage";
import SignUp from "../components/admin/SignUp";
import RedirectPage from "../components/RedirectPage";
import AddCoupon from "../components/admin/AddCoupon";
import Coupon from "../components/admin/Coupon.jsx";
import EditProduct from "../components/admin/EditProduct.jsx";
import EditCoupon from "../components/admin/EditCoupon.jsx";
import Admins from "../components/admin/Admins.jsx";
import EditAccounts from "../components/admin/EditAccounts.jsx";
import RecycleData from "../components/admin/RecycleData.jsx";
import AddLogo from "../components/admin/AddLogo.jsx";
import AddToCart from "../pages/AddToCart.jsx";
import About from "../pages/About.jsx";
import ReturnPolicy from "../pages/ReturnPolicy.jsx";
import TermsAndConditions from "../pages/TermsAndConditions.jsx";
import AddCarousel from "../components/admin/AddCarousel.jsx";

const Layout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  // Check local storage for admin details on component mount
  useEffect(() => {
    const email = localStorage.getItem("email");
    const pass = localStorage.getItem("pass");

    if (email) {
      setIsAdmin(true);
      // console.log(email,pass);
    }
  }, []);
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path=":id/buy-now" element={<OrderPage />} />
        <Route
          path="admin-login"
          element={<AdminLogin setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="new-arrivals"
          element={<NewArrival title={"NEW ARRIVALS"} />}
        />
        <Route path="/suit-sets" element={<NewArrival title={"SUIT SETS"} />} />
        <Route
          path="/celebrity-stylists"
          element={<NewArrival title={"CELEBRITY STYLISTS"} />}
        />
        <Route
          path="/best-seller"
          element={<NewArrival title={"BEST SELLER"} />}
        />
        <Route
          path="/lehenga-sets"
          element={<NewArrival title={"LEHENGA SETS"} />}
        />
        <Route path="/admin" element={isAdmin ? <Admin /> : <RedirectPage />}>
          <Route index element={<DashBoard />} />
          <Route path="product" element={<Product />} />
          <Route path="recycle-bin/:id" element={<EditProduct />} />
          <Route path="recycle-bin" element={<RecycleData />} />
          <Route path="product/:id" element={<EditProduct />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="coupon/:id" element={<EditCoupon />} />
          <Route path="add-coupon" element={<AddCoupon />} />
          <Route path="add-products" element={<AddProduct />} />
          <Route path="add-logo" element={<AddLogo />} />
          <Route path="add-carousel" element={<AddCarousel />} />
          <Route path="account" element={<Admins />} />
          <Route path="account/:id" element={<EditAccounts />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
