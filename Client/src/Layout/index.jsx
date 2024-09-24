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
import Carousel from "../components/admin/Carousel.jsx";
import CartOrder from "../pages/CartOrder.jsx";
import AddColor from "../components/admin/AddColor.jsx";
import AddNavItem from "../components/admin/AddNavItem.jsx";
import AddSocialLink from "../components/admin/AddSocialLink.jsx";
import ThankuPage from "../pages/ThankuPage.jsx";
import AllOrder from "../pages/AllOrder.jsx";
import Sdashboard from "../components/superadmin/Sdashboard.jsx";
import SuperAdmin from "../pages/SuperAdmin.jsx";
import AddClient from "../components/superadmin/AddClient.jsx";
import AllClient from "../components/superadmin/AllClient.jsx";
import EditClient from "../components/superadmin/EditClient.jsx";
import SuperAdminLogin from "../pages/SuperAdminLogin.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import AddBanner from "../components/admin/AddBanner.jsx";
import AddTitle from "../components/admin/AddTitle.jsx";
import AddFavicon from "../components/admin/AddFavicon.jsx";

const Layout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [navItemData, setNavItemData] = useState(false);

  // Check local storage for admin details on component mount
  useEffect(() => {
    const admin = localStorage.getItem("user");
    const superAdmin = localStorage.getItem("superadmin");
    superAdmin ? setIsSuperAdmin(true) : null;
    admin ? setIsAdmin(true) : null;

    const getFun = async () => {
      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        "https://ecserver.estatebot.in/client/" + currentUrl
      );
      const clientData = await response.json();

      let resultNavItem = await fetch("https://ecserver.estatebot.in/nav-item");
      resultNavItem = await resultNavItem.json();

      const filteredResultNavItems = resultNavItem.filter((value) => {
        return value.clientId == clientData._id;
      });

      setNavItemData(
        filteredResultNavItems.length > 0 ? filteredResultNavItems[0] : false
      );
      let resultTitle = await fetch("https://ecserver.estatebot.in/title");
      resultTitle = await resultTitle.json();

      const filteredResultTitles = resultTitle.filter((value) => {
        return value.clientId == clientData._id;
      });

      const titleData =
        filteredResultTitles.length > 0 ? filteredResultTitles[0] : false;
      document.title = `${titleData?titleData.title:'Title'}`;
      // console.log(titleData);

      let resultFavicon = await fetch("https://ecserver.estatebot.in/favicon");
      resultFavicon = await resultFavicon.json();

      const filteredResultFavicons = resultFavicon.filter((value) => {
        return value.clientId == clientData._id;
      });

      const FaviconData =
        filteredResultFavicons.length > 0 ? filteredResultFavicons[0] : false;
        if(FaviconData){
          const faviconUrl = `https://ecserver.estatebot.in/${FaviconData.favicon}`;
          const linkTag = document.querySelector('link[rel="icon"]');
          linkTag.href = faviconUrl;
        

        }

      // document.Favicon = FaviconData.Favicon;
    };
    getFun();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanku-page" element={<ThankuPage />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="orders" element={<AllOrder />} />
        <Route path="/add-to-cart/cart-order" element={<CartOrder />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id/buy-now" element={<OrderPage />} />
        <Route
          path="admin-login"
          element={<AdminLogin setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="super-admin-login"
          element={<SuperAdminLogin setIsSuperAdmin={setIsSuperAdmin} />}
        />

        <Route
          path={navItemData ? navItemData.nav1.replace(/\s+/g, "") : "menu1"}
          element={
            <NewArrival title={navItemData ? navItemData.nav1 : "section 1"} />
          }
        />
        <Route
          path={navItemData ? navItemData.nav2.replace(/\s+/g, "") : "menu2"}
          element={
            <NewArrival title={navItemData ? navItemData.nav2 : "section 2"} />
          }
        />
        <Route
          path={navItemData ? navItemData.nav3.replace(/\s+/g, "") : "menu3"}
          element={
            <NewArrival title={navItemData ? navItemData.nav3 : "section 3"} />
          }
        />
        <Route
          path={navItemData ? navItemData.nav4.replace(/\s+/g, "") : "menu4"}
          element={
            <NewArrival title={navItemData ? navItemData.nav4 : "section 4"} />
          }
        />
        <Route
          path={navItemData ? navItemData.nav5.replace(/\s+/g, "") : "menu5"}
          element={
            <NewArrival title={navItemData ? navItemData.nav5 : "section 5"} />
          }
        />
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <Admin />
            ) : (
              <RedirectPage title={"Admin"} router={"/admin-login"} />
            )
          }
        >
          
          <Route index element={<DashBoard />} />
          <Route path="product" element={<Product />} />
          <Route path="recycle-bin/:id" element={<EditProduct />} />
          <Route path="recycle-bin" element={<RecycleData />} />
          <Route path="product/:id" element={<EditProduct />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="coupon/:id" element={<EditCoupon />} />
          <Route path="add-coupon" element={<AddCoupon />} />
          <Route path="add-products" element={<AddProduct />} />
          <Route path="add-title" element={<AddTitle />} />
          <Route path="add-favicon" element={<AddFavicon />} />
          <Route path="add-logo" element={<AddLogo />} />
          <Route path="add-color" element={<AddColor />} />
          <Route path="add-nav-item" element={<AddNavItem />} />
          <Route path="add-social-link" element={<AddSocialLink />} />
          <Route path="add-carousel" element={<AddCarousel />} />
          <Route path="account" element={<Admins />} />
          <Route path="account/:id" element={<EditAccounts />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route
          path="/super-admin"
          element={
            isSuperAdmin ? (
              <SuperAdmin />
            ) : (
              <RedirectPage
                title={"Super Admin"}
                router={"/super-admin-login"}
              />
            )
          }
        >
          <Route index element={<Sdashboard />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="all-client" element={<AllClient />} />
          <Route path="all-client/:id" element={<EditClient />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
