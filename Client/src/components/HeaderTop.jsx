import { ApiColor } from "./api/data";


const HeaderTop = () => {
  
  return (
    <>
      <div style={{backgroundColor:ApiColor}} className="text-white flex px-8 p-2 uppercase">
        <p className="header-top-animation text-sm"> 🌟 50% OFF SALE! 🌟 </p>
      </div>
      
    </>
  );
};

export default HeaderTop;
