import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 lg:top-3 left-0 right-0 font-bold lg:px-2 py-2 shadow-md flex justify-between items-center mx-auto bg-white lg:rounded-full max-w-screen-xl w-full z-50">

      <div className="text-xl px-2 font-bold ">
        <h1>etail.me</h1>
      </div>
      <div className=" hidden lg:flex text-sm" >
        <Link to="/" className="hover:text-gray-200 text-sm lg:p-5">About</Link>
        <Link to="/" className="hover:text-gray-200 text-sm lg:p-5">Fetures</Link>
        <Link to="/" className="hover:text-gray-200 text-sm lg:p-5">Pricing</Link>
      </div>
      <div className=" hidden lg:flex gap-4 text-sm mx-2">
        <button   className="bg-gray-200 rounded-full px-4 "> 
        <Link to="/">Login</Link>
        </button>
        <button  className="hover:text-gray-200 text-white bg-black rounded-full p-1">
        <Link to="/">Start selling</Link>
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
