import { useEffect, useState } from "react"; 
import RiseLoader from "react-spinners/RiseLoader";
const baseUrl = import.meta.env.VITE_APP_URL;

const HeaderTop = () => {
  const [loading, SetLoading] = useState(false);
  const [couponData, setCouponData] = useState();

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1500);

    const getFun = async () => {
      let couponresult = await fetch(`${baseUrl}/coupon`);
      couponresult = await couponresult.json();

      if (couponresult.length > 0) {
        const reversedCoupons = couponresult.reverse();
        setCouponData(reversedCoupons[0].discount);
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
              color={"#000"}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <div
          style={{ backgroundColor: "black" }}
          className="text-white justify-center flex px-8 p-2 uppercase"
        >
          <p className="  text-sm"> 🌟 {couponData} OFF SALE! 🌟 </p>
        </div>
      )}
    </>
  );
};

export default HeaderTop;
