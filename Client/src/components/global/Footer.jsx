import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="flex justify-center md:justify-between flex-wrap bg-uiColor text-white md:p-5 lg:p-16 ">
        <div className="flex flex-col text-center md:text-start gap-7 lg:gap-10 mt-8 w-80">
          <h3 className="text-lg font-semibold">KNOW ABOUT US</h3>
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://bhaviniparis.com/cdn/shop/files/bhavini_paris_logo_file-01_360x.jpg?v=1702467865"
              alt="..."
              className="h-10 mb-5 "
            />
            <p className="text-lg">
              In 2021, ‘Bhavini Paris’ was launched, With Imaginative fashion as
              a fashion destination to busy fast paced woman with a strong sense
              of fashion.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center md:text-start gap-7 lg:gap-10 mt-8 w-80">
          <h3 className="text-lg font-semibold">MAIN MENU</h3>
          <ul className="flex flex-col gap-3">
            <Link to={'/'}>
              {" "}
              <li>Home</li>
            </Link>
            <Link to={'/new-arrivals'}>
              <li>New Arrivals</li>
            </Link>
            <Link to={'/suit-sets'}>
              <li>Suit sets</li>
            </Link>
            <Link to={'/celebrity-stylists'}>
              <li>Celebrity Stylists</li>
            </Link>
            <Link to={'/best-seller'}>
              <li>Best Seller</li>
            </Link>
            <Link to={'/lehenga-sets'}>
              <li>Lehenga Sets</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col text-center md:text-start gap-7 lg:gap-10 mt-8 w-80">
          <h3 className="text-lg font-semibold">FOOTER MENU</h3>
          <ul className="flex flex-col gap-3">
            <Link to={'/'}>
              {" "}
              <li>About Us</li>
            </Link>
            <Link to={'/'}>
              {" "}
              <li>RETURN & EXCHANGE POLICY</li>
            </Link>
            <Link to={'/'}>
              {" "}
              <li>Cancellation Policy</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col text-center md:text-start gap-7 lg:gap-10 mt-8 w-80">
          <h3 className="text-lg font-semibold">NEWSLETTER</h3>
          <div className="flex flex-col gap-5">
            <p className="text-lg">
              Join the conscious fashion movement with us.
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Your email"
                className="border-0 placeholder:text-white border-b-2 border-white bg-transparent px-0"
              />
              <p className="border-b-2 border-white">SUBSCRIBE </p>
            </div>
            <div className="flex gap-5 text-xl mb-5">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-4 px-16">
        <p>© 2024 botmediadigital.com | Developed by BotMedia Digital</p>
      </div>
    </div>
  );
};

export default Footer;
