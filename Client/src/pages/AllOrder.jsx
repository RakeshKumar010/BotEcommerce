import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import HeaderTop from "../components/HeaderTop";
import OrderImg from "../assets/image/orderImg1.webp";
import OrderImg2 from "../assets/image/orderImg2.webp";
const AllOrder = () => {
  
  return (
    <>
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <section className="md:py-24 py-12 relative bg-gray-100">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2
            style={{ color: 'black' }}
            className="title font-manrope font-bold text-3xl md:text-4xl leading-10 mb-8 text-center  "
          >
            Your Orders
          </h2>
          <div className="flex items-center justify-between  my-4 p-2    bg-white shadow-lg rounded-lg flex-wrap gap-5 lg:gap-2">
            <div className="flex justify-start  items-center gap-5 ">
              <img
                src={OrderImg}
                alt="..."
                className="w-[60px]    rounded-lg"
              />
              <h5 class="font-semibold text-xl leading-8 text-black  ">
                Tokyo Talkies
              </h5>
            </div>
            <h6 class="font-medium text-lg leading-8   max-[550px]:text-center">
              ₹4239.2
            </h6>
            <div className="flex flex-col items-start   w-96">
              <h6 class="font-medium text-lg leading-8   max-[550px]:text-center">
                🟢Delivered on Apr 12
              </h6>
              <p className="text-sm">Your item has been delivered</p>
            </div>
          </div>
          <div className="flex items-center justify-between  my-4 p-2    bg-white shadow-lg rounded-lg flex-wrap gap-5 lg:gap-2">
            <div className="flex justify-start  items-center gap-5 ">
              <img
                src={OrderImg2}
                alt="..."
                className="w-[60px]    rounded-lg"
              />
              <h5 class="font-semibold text-xl leading-8 text-black  ">
              Ribbed White 
              </h5>
            </div>
            <h6 class="font-medium text-lg leading-8   max-[550px]:text-center">
              ₹3339.2
            </h6>
            <div className="flex flex-col items-start  w-96">
              <h6 class="font-medium text-lg leading-8   max-[550px]:text-center">
              🔴Refund Completed
              </h6>
              <p className="text-sm">You requested a cancellation due to quality issues with the product.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllOrder;
//
