import React from "react";
import img from "../../assets/img/image.webp";
import { ArrowRight } from "phosphor-react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="top-1 h-full flex flex-col justify-center text-white px-4 sm:px-6 lg:px-10 items-center lg:items-start lg:w-2xl">
        <div className="w-full lg:max-w-lg">
          <h1 className="text-4xl md:text-7xl font-bold text-center lg:text-left">
            Register <br className="hidden lg:block" /> your store <br className="hidden lg:block" /> name now!
          </h1>
          <p className="text-lg md:text-lg mt-4 font-bold text-center lg:text-left">
            With etail.me, anyone can earn their <br className="hidden lg:block" />first dollar online. Just start
            with what<br className="hidden lg:block" /> you know. It's that easy.
          </p>
        </div>
        <button className="p-2 mt-4 md:text-lg bg-black rounded-full mx-auto lg:mx-0 max-w-sm w-full sm:text-white text-center flex items-center justify-center gap-2 whitespace-nowrap">
          <strong>my store</strong> | Enter your store name now
          <Link to="/">
            <ArrowRight size={20} className="text-white ml-1" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
