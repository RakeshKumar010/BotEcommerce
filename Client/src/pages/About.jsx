import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";

const About = () => {
  return (
    <>
  <div className="sticky top-0 z-10 right-0 left-0 bg-white shadow-md">
    <HeaderTop />
    <NavBar/>
  </div>
  <main className="p-10 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold mb-5 text-black">
      About Us <FaShoppingCart className="inline" />
    </h1>
    <section className="mb-5 text-gray-700">
      <p>
        Welcome to <strong className="text-black">CartCraze</strong> - your ultimate fashion
        destination!
      </p>
      <p>
        Founded in <strong className="text-black">2024</strong>, CartCraze has quickly established
        itself as a trusted platform for the busy, fast-paced woman who has a
        strong sense of fashion. We understand that in today's world, every
        second counts. That's why we've made it our mission to provide you with
        the most stylish and highest quality fashion items, all available at
        your fingertips.
      </p>
      <p>
        At CartCraze, we believe that fashion is more than just clothes - it's a
        lifestyle. It's about feeling confident and expressing your unique
        style. That's why we offer a wide range of products, from trendy
        clothing and accessories to chic home decor.
      </p>
      <p>
        Our team is constantly on the lookout for the latest trends and styles.
        We work tirelessly to ensure that our collection is always up-to-date,
        providing you with endless options to choose from. Whether you're
        looking for a statement piece for a special occasion or everyday
        essentials, you'll find it here at CartCraze.
      </p>
      <p>
        Thank you for choosing CartCraze. We can't wait to help you create your
        perfect look!
      </p>
      <p className="mb-5">Happy Shopping!</p>
      <p className="font-semibold">The CartCraze Team</p>
    </section>
  </main>
  <Footer/>
</>

  );
};

export default About;
