import { PiAirplaneTiltLight } from "react-icons/pi";
import { CiBadgeDollar } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const FeatureBottom = () => {
  return (
    <div className="bg-[#eeeeee] flex justify-around md:gap-4 gap-2 items-center py-10 flex-wrap">
      <div className="flex gap-4 items-center p-2">
        <PiAirplaneTiltLight className="text-4xl md:text-5xl"/>

        <p className="text-base md:text-lg">
          Woldwide <br /> Shipping
        </p>
      </div>
      <div className="flex gap-4 items-center p-2">
        <CiBadgeDollar className="text-4xl md:text-5xl"/>

        <p className="text-base md:text-lg">
          Quality <br /> Guarantee
        </p>
      </div>
      <div className="flex gap-4 items-center p-2">
        <CiLock className="text-4xl md:text-5xl"/>
        <p className="text-base md:text-lg">
          Secure <br /> Guarantee
        </p>
      </div>

      <div className="flex gap-4 items-center p-2">
        <CiShoppingCart className="text-4xl md:text-5xl font-thin"/>
        <p className="text-base md:text-lg">
          Secure <br /> Shopping
        </p>
      </div>
    </div>
  );
};

export default FeatureBottom;
