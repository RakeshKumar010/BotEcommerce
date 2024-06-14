import { FaUserSlash } from "react-icons/fa";
import { FaPeopleGroup, FaUserLarge } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Sdashboard = () => {
  const [totalClient, setTotalClient] = useState();
  const [activeClients, setActiveClients] = useState();
  const [deactiveClients, setDeActiveClients] = useState();

  const cardData = [
    {
      name: "Total Client",
      value: totalClient,
      icon: <FaPeopleGroup className="text-black text-2xl" />,
    },
    {
      name: "Active Clients",
      value: activeClients,
      icon: <FaUserLarge className="text-black text-2xl" />,
    },
    {
      name: "Deactive Clients",
      value: deactiveClients,
      icon: <FaUserSlash className="text-black text-2xl" />,
    },
  ];
  useEffect(() => {
    const getFun = async () => {
      let total = await fetch("https://psyrealestate.in/show-client");
      total = await total.json();
      setTotalClient(total.length);
      let deactive = total.filter((user) => user.status === "0");
      let active = total.filter((user) => user.status === "1");
      setDeActiveClients(deactive.length);
      setActiveClients(active.length);
    };
    getFun();
  });
  return (
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      <div className="grid grid-cols-1  md:grid-cols-3 p-4 gap-4">
        {cardData.map((card, index) => (
          <div
            className={`  hover:scale-105 transition-all  bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4    border-gray-600 text-white font-medium group`}
          >
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              {card.icon}
            </div>
            <div className="text-right">
              <p className="text-2xl">{card.value}</p>
              <p>{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sdashboard;
