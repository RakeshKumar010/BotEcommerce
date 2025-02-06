import { useEffect, useState } from "react";
import { ApiColor } from "./api/data";
import RiseLoader from "react-spinners/RiseLoader";
const baseUrl = import.meta.env.VITE_APP_URL;

const HeaderTop = () => {
  const [loading, SetLoading] = useState(false);
  const [couponData,setCouponData]=useState()

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1500);

    const getFun = async () => {
      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        `${baseUrl}/client/${currentUrl}`
      );
      const clientData = await response.json();
      
      let couponresult = await fetch(`${baseUrl}/coupon`);
      couponresult = await couponresult.json();

      const filterCoupan = couponresult.filter((value) => {
        return value.clientId == clientData._id;
      });
      if (filterCoupan.length > 0) {
        const reversedCoupons = filterCoupan.reverse();
        setCouponData(reversedCoupons[0].discount);
        // console.log(reversedCoupons[0].discount);
      } else {
        setCouponData("5%");
      }
    };
    getFun();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="flex bg-white fixed right-0 left-0 bottom-0 top-0 z-50 justify-center items-center">
            <RiseLoader
              loading={loading}
              color={ApiColor ? ApiColor : "#000"}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <div
          style={
            ApiColor
              ? { backgroundColor: ApiColor }
              : { backgroundColor: "black" }
          }
          className="text-white flex px-8 p-2 uppercase"
        >
          <p className="header-top-animation text-sm">
            {" "}
            🌟 {couponData} OFF SALE! 🌟{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default HeaderTop;
