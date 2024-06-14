import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

const AllClient = () => {
  const [data, setData] = useState();
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://psyrealestate.in/show-client");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);
  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black h-screen w-full lg:w-[83%] absolute right-0 ">
      <p
        className="text-3xl font-bold text-center my-10  "
        style={{ color: "#1f2937" }}
      >
        All Client
      </p>
      <table className="w-[90%]  mx-auto text-center shadow-lg ">
        <tr
          style={{ backgroundColor: "#1f2937" }}
          className=" border-2  text-white "
        >
          <th className="p-2">S.No.</th>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Number</th>
          <th className="p-2">Passwod</th>
          <th className="p-2">Expiry Date</th>
          <th className="p-2">Domain</th>
          <th className="p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>

        {data &&
          data.map(({ _id, name, email, pass, number, expiryDate,status,domain }, index) => {
            return (
              <tr className="border-2 " key={index}>
                <td className="p-2 border-r-2 text-sm ">{index + 1}</td>
                <td className="p-2 border-r-2 text-sm  "> {name} </td>
                <td className="p-2 border-r-2 text-sm ">{email}</td>
                <td className="p-2 border-r-2 text-sm ">{pass}</td>
                <td className="p-2 border-r-2 text-sm ">{number}</td>
                <td className="p-2 border-r-2 text-sm ">{expiryDate}</td>
                <td className="p-2 border-r-2 text-sm ">{domain}</td>
                {status==1?<td className="p-2 border-r-2 text-sm text-green-500 font-bold">Active</td>:
                <td className="p-2 border-r-2 text-sm text-red-500 font-bold">Unactive</td>}

                <td className="p-2 border-r-2 text-sm ">
                  <div className="flex justify-center items-center">
                    <Link to={_id}>
                      <BiEdit className="text-2xl text-teal-400 hover:scale-110" />
                    </Link>
                    <CgRemove
                      onClick={async () => {
                        let result = await fetch(
                          `https://psyrealestate.in/delete-client/${_id}`,
                          {
                            method: "delete",
                            headers: { "content-type": "application/json" },
                          }
                        );
                        setPageLoad(result);
                      }}
                      className="text-2xl text-red-600 hover:scale-110"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default AllClient;
