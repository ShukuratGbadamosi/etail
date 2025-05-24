import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="  font-bold lg:left-30 shadow-md p-3 flex justify-between items-center bg-white lg:rounded-full max-w-6xl w-full lg:my-5 absolute z-10 mx-auto">
      <div className="text-xl px-2 font-bold ">
        <h1>etail.me</h1>
      </div>
      <div className=" hidden lg:flex text-sm" >
        <Link to="/" className="hover:text-gray-200 text-sm lg:p-5">About</Link>
        <Link to="/" className="hover:text-gray-200 text-sm lg:p-5">Fetures</Link>
        <Link to="/" className="hover:text-gray-200 text-sm lg:p-5">Pricing</Link>
      </div>
      <div className=" hidden lg:flex gap-8 text-sm">
        <Link to="/" className="hover:text-gray-200">Login</Link>
        <button>
        <Link to="/" className="hover:text-gray-200 text-white bg-black rounded-xl p-1">Start selling</Link>
        </button>
      </div>

        <div className="lg:hidden">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
