import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ApiColor } from "../api/data";
const Coupon = () => {
  const [data, setData] = useState();
  const [access, setAccess] = useState("");
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);

      let result = await fetch("https://psyrealestate.in/coupon");
      result = await result.json();
      let filteredResults = result.filter(
        (value) => value.clientId == user._id
      );

      setData(filteredResults);

      let result2 = await fetch("https://psyrealestate.in/show-client");
      result2 = await result2.json();

      result2.map((value) => {
        if (value.email == user.email) {
          setAccess(value);
        }
      });
    };

    getFun();
  }, [pageLoad]);

  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black h-screen w-full lg:w-[83%] absolute right-0 ">
      <p
        className="text-3xl font-bold text-center my-10 "
        style={ApiColor?{ color: ApiColor }:{ color: 'black'}}
      >
        All Coupon
      </p>
      <table className="w-[90%] mx-auto text-center shadow-lg ">
        <tr
          style={ApiColor?{ backgroundColor: ApiColor }:{ backgroundColor: 'black'}}
          className="border-2  text-white "
        >
          <th className="p-2">S.No.</th>
          <th className="p-2">Title</th>
          <th className="p-2">Discount</th>
          <th className="p-2">Code</th>
          <th className="p-2">Expiry Date</th>
          <th className="p-2">Action</th>
        </tr>

        {data && data.length > 0 ? (
          [...data]
            .reverse()
            .map(({ _id, title, discount, code, expiryDate }, index) => {
              return (
                <tr className="border-2" key={index}>
                  <td className=" p-2">{index + 1}</td>
                  <td className=" p-2">{title}</td>
                  <td className=" p-2">{discount}</td>
                  <td className=" p-2">{code}</td>
                  <td className=" p-2">{expiryDate}</td>
                  <td className="flex gap-2 justify-center p-2">
                    {access.editCoupon == "yes" ? (
                      <Link to={_id}>
                        <BiEdit className="text-2xl text-teal-400 hover:scale-110" />
                      </Link>
                    ) : null}
                    {access.deleteCoupon == "yes" ? (
                      <CgRemove
                        onClick={async () => {
                          let result = await fetch(
                            `https://psyrealestate.in/coupon/${_id}`,
                            {
                              method: "delete",
                              headers: { "content-type": "application/json" },
                            }
                          );

                          if (result.ok) {
                            setPageLoad(result);
                            Swal.fire({
                              title: "Success",
                              text: "Coupon Deleted successfully!",
                              icon: "success",
                                confirmButtonColor: `${ApiColor?ApiColor:'black'}`,
                            });
                          } else {
                            alert("HTTP-Error: " + response.status);
                          }
                        }}
                        className="text-2xl text-red-600 hover:scale-110"
                      />
                    ) : null}
                  </td>
                </tr>
              );
            })
        ) : (
          <tr>
            <td colSpan="6" className="text-center p-2">
              Data Not Found
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Coupon;
