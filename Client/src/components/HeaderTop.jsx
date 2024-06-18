import { useEffect, useState } from "react";

const HeaderTop = () => {
  const [apiDataColor, setApiDataColor] = useState();
  useEffect(() => {
    function trimUrl(url) {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "");
    }
    async function getColor() {
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        "https://psyrealestate.in/client/" + currentUrl
      );
      const clientData = await response.json();

      response = await fetch("https://psyrealestate.in/color");
      const colorsData = await response.json();

      const filteredResults = colorsData.filter((value) => {
        // console.log(value.clientId);
        return value.clientId == clientData._id;
      });
      if(filteredResults.length>0){

        setApiDataColor(filteredResults[0].color);
      }else{
        setApiDataColor('black')
      }
      //  const  ApiColor = filteredResults[filteredResults.length - 1].color;
      //  setApiDataColor(ApiColor)
    }
    getColor();
  });
  return (
    <>
      <div
        style={{ backgroundColor: apiDataColor }}
        className="text-white flex px-8 p-2 uppercase"
      >
        <p className="header-top-animation text-sm"> 🌟 50% OFF SALE! 🌟 </p>
      </div>
    </>
  );
};

export default HeaderTop;
