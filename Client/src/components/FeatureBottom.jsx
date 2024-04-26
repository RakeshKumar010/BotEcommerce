import { PiAirplaneTiltLight } from "react-icons/pi";
import { CiBadgeDollar } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";

const FeatureBottom = () => {
  return (
    <div className="bg-[#eeeeee] flex justify-around items-center py-10 flex-wrap">
      <div className="flex gap-4 items-center">
        <PiAirplaneTiltLight className="text-5xl"/>

        <p className="text-lg">
          Woldwide <br /> Shipping
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <CiBadgeDollar className="text-5xl"/>

        <p className="text-lg">
          Quality <br /> Guarantee
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <CiLock className="text-5xl"/>
        <p className="text-lg">
          Secure <br /> Guarantee
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <AiOutlineShopping className="text-5xl"/>
        <p className="text-lg">
          Secure <br /> Shopping
        </p>
      </div>
    </div>
  );
};

export default FeatureBottom;
