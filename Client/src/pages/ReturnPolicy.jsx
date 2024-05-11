import React from "react";
import Footer from "../components/global/Footer";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";

const ReturnPolicy = () => {
  return (
    <>
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md w-3/4">
          <h1 className="text-2xl font-bold mb-4">Return Policy</h1>
          <p className="mb-2">
            At <strong>CartCraze</strong>, we strive to offer the best shopping
            experience, including fast and hassle-free returns.
          </p>
          <p className="mb-2">
            Please contact us within 14 days of receiving your item to request a
            return.
          </p>
          <p className="mb-2">
            To be eligible for a return, your item must be unused and in the
            same condition that you received it.
          </p>
          <p className="mb-2">
            If you have any questions about our return policy, please contact
            us. Our customer service team is always ready to help!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
