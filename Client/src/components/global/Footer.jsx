import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollUpDown from "./ScrollUpDown";
import { useEffect, useState } from "react";
import { ApiColor } from "../api/data";
const Footer = () => {
  const [logos, setLogos] = useState(false);
  const [socialLink, setSocialLink] = useState("");

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://psyrealestate.in/add-logo");
      result = await result.json();
      setLogos(result[result.length - 1].logo);
      let socialResult = await fetch(
        "https://psyrealestate.in/social-link/66697d798873e6507de4ca20"
      );
      socialResult = await socialResult.json();
      setSocialLink(socialResult);
 
    };
    getFun();
  }, []);

  return (
    <>
      <div>
        <div
          style={{ backgroundColor: ApiColor }}
          className={`flex justify-center md:justify-between flex-wrap   text-white md:p-5 lg:p-16`}
        >
          <div className="flex flex-col text-center md:text-start gap-3 md:gap-7 lg:gap-10 mt-8 w-80">
            <h3 className="text-lg font-semibold">KNOW ABOUT US </h3>
            <div className="flex flex-col items-center md:items-start">
              <Link to={"/"}>
                {logos ? (
                  <img
                    src={`https://psyrealestate.in/${logos}`}
                    alt="..."
                    className="h-16 mb-5"
                  />
                ) : (
                  ""
                )}
              </Link>
              <p className="text-lg">
                In 2024, ‘CartCraze’ was launched, With Imaginative fashion as a
                fashion destination to busy fast paced woman with a strong sense
                of fashion.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-start gap-2 md:gap-7 lg:gap-10 mt-8 w-80">
            <h3 className="text-lg font-semibold">MAIN MENU</h3>
            <ul className="flex flex-col gap-1 md:gap-3">
              <Link to={"/"}>
                {" "}
                <li>Home</li>
              </Link>
              <Link to={"/new-arrivals"}>
                <li>New Arrivals</li>
              </Link>
              <Link to={"/suit-sets"}>
                <li>Suit sets</li>
              </Link>
              <Link to={"/celebrity-stylists"}>
                <li>Celebrity Stylists</li>
              </Link>
              <Link to={"/best-seller"}>
                <li>Best Seller</li>
              </Link>
              <Link to={"/lehenga-sets"}>
                <li>Lehenga Sets</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col text-center md:text-start gap-2 md:gap-7 lg:gap-10 mt-8 w-80">
            <h3 className="text-lg font-semibold">FOOTER MENU</h3>
            <ul className="flex flex-col gap-1 md:gap-3">
              <Link to={"/about"}>
                {" "}
                <li>About Us</li>
              </Link>
              <Link to={"/return-policy"}>
                {" "}
                <li>RETURN & EXCHANGE POLICY</li>
              </Link>
              <Link to={"/terms-and-conditions"}>
                {" "}
                <li>Terms and Conditions</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col text-center md:text-start gap-2 md:gap-7 lg:gap-10 mt-8 w-80">
            <h3 className="text-lg font-semibold">NEWSLETTER</h3>
            <div className="flex flex-col gap-5">
              <p className="text-lg">
                Join the conscious fashion movement with us.
              </p>
              <div className="flex items-end flex-wrap justify-center gap-5">
                <input
                  type="text"
                  placeholder="Your email"
                  className="border-0 placeholder:text-white focus:ring-0 focus:border-white focus:outline-none border-b-2 border-white bg-transparent px-0"
                />
                <p className="shadow-sm shadow-black/30 rounded-md text-white py-2 px-5 cursor-pointer">
                  SUBSCRIBE{" "}
                </p>
              </div>
              <div className="flex gap-5 text-xl mb-5 cursor-pointer justify-center">
                {socialLink.facebook == "" ? (
                  ""
                ) : (
                  <Link target="_blank" to={socialLink.facebook}>
                    <FaFacebookF />
                  </Link>
                )}
                {socialLink.insta == "" ? (
                  ""
                ) : (
                  <Link target="_blank" to={socialLink.insta}>
                    <FaInstagram />
                  </Link>
                )}
                {socialLink.youtube == "" ? (
                  ""
                ) : (
                  <Link target="_blank" to={socialLink.youtube}>
                    <FaYoutube />
                  </Link>
                )}
                {socialLink.twitter == "" ? (
                  ""
                ) : (
                  <Link target="_blank" to={socialLink.twitter}>
                    <FaTwitter />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white md:text-base text-[10px] py-4 md:px-16">
          <p>© 2024 botmediadigital.com | Developed by BotMedia Digital</p>
        </div>
      </div>
      <ScrollUpDown />
    </>
  );
};

export default Footer;
