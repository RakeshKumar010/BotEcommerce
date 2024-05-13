import React, { useEffect } from "react";
import Footer from "../components/global/Footer";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";

const ReturnPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
            We at Our Store want you to be completely satisfied with your
            purchase. If you are not satisfied for any reason, we will gladly
            accept your return within 30 days.
          </p>
          <p className="mb-2">
            Returned items must be in their original packaging and original
            condition. Please note that shipping and handling charges are not
            refundable.
          </p>
          <p className="mb-2">
            To return an item, please contact our customer service team. Once we
            receive your returned item, we will refund the purchase price to the
            original form of payment.
          </p>
          <p>
            Please note that it may take up to two billing cycles for the credit
            to appear on your monthly credit card statement.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
