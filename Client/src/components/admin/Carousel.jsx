import React, { useEffect, useState } from "react";
import { CgRemove } from "react-icons/cg";
import { ApiColor } from "../api/data";
const Carousel = () => {
  const [data, setData] = useState();
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);
      let result = await fetch("http://localhost:4001/carousel");
      result = await result.json();
      let filteredResults = result.filter(
        (value) => value.clientId == user._id
      );

      setData(filteredResults);

      setPageLoad(result);
    };

    getFun();
  }, [pageLoad]);

  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black min-h-screen w-full lg:w-[83%] absolute right-0 ">
      <p
        className="text-3xl font-bold text-center my-10 "
        style={{ color: ApiColor }}
      >
        All Carousel
      </p>
      <table className=" mx-auto text-center   table-fixed shadow-lg ">
        <tr
          style={{ backgroundColor: ApiColor }}
          className="border-2  text-white "
        >
          <th className="p-2">S.No.</th>
          <th className="p-2">Image</th>

          <th className="p-2">Action</th>
        </tr>

        {data && data.length > 0 ? (
          [...data].reverse().map(({ _id, carousel }, index) => {
            return (
              <tr className="border-2">
                <td className=" p-2">{index + 1}</td>
                <td className=" p-2 bg-black ">
                  <img
                    src={`http://localhost:4001/${carousel}`}
                    alt="..."
                    className="  h-52 "
                  />
                </td>
                <td className=" p-2 ">
                  <CgRemove
                    onClick={async () => {
                      let result = await fetch(
                        `http://localhost:4001/carousel/${_id}`,
                        {
                          method: "delete",
                          headers: { "content-type": "application/json" },
                        }
                      );
                      setPageLoad(result);
                    }}
                    className="text-2xl text-red-600 hover:scale-110"
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="3" className="text-center p-2">
              Data Not Found
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Carousel;
