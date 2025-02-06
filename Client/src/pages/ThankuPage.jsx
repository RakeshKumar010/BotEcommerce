import { Link } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
const ThankuPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="flex items-center justify-center h-[80vh] md:h-screen">
        <div className="md:p-6  p-4 rounded-md shadow-lg shadow-gray-300 mx-3">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p>
              Thank you for your interest! Check your email for a link to the
              guide.
            </p>
            <Link
              to={"/"}
              style={{ backgroundColor: "black" }}
              className="flex items-center px-4 py-2 text-white   rounded-full  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-sm font-medium">Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankuPage;
