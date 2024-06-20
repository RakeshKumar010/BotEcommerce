 
import { useEffect, useState } from "react";
import { ApiColor } from "./api/data";
import RiseLoader from "react-spinners/RiseLoader";

const HeaderTop = () => {
  const [loading, SetLoading] = useState(false);

  useEffect(()=>{
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1000);
  },[])
  return (
    <>
     {loading ? (
        <>
          {" "}
          <div className="flex bg-white fixed right-0 left-0 bottom-0 top-0 z-50 justify-center items-center">
            <RiseLoader
              loading={loading}
              color={ApiColor?ApiColor:"#000"}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) :  <div
          style={ApiColor?{ backgroundColor: ApiColor }:{ backgroundColor: 'black' }}
        className="text-white flex px-8 p-2 uppercase"
      >
        <p className="header-top-animation text-sm"> 🌟 50% OFF SALE! 🌟 </p>
      </div>}
    </>
  );
};

export default HeaderTop;
