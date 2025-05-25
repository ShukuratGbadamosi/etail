import React from 'react'
import img from "../../assets/img/image.webp"
import { Link } from 'react-router'

const LandingPage = () => {
  return (
    <div className=' relative w-full h-screen'>
      <img src={img} alt="background image" className='w-full h-full object-cover' />

      <div className='absolute top-1  h-full flex flex-col justify-center text-white  px-4 sm:px-6 lg:items-start lg:left-20 lg:left-20 sm-m-auto lg:max-w-2xl '>
       <h1 className='text-4xl md:text-6xl font-bold  text-center  lg:text-left'>Register your store name now!</h1>
        <p className='text-lg md:text-xl mt-4 font-bold  text-center lg:text-left '>With etail.me, anyone can earn their first dollar online. Just start with what you know. it's that easy.</p>

        <botton to="/" className='text-lg md:text-xl p-2 mt-2  bg-black rounded-full p-1 max-w-sm sm:text-white  text-center  '><strong>my store</strong> | Enter your store name now <Link to="/">  →</Link> </botton>

      </div> 
    </div>



  )
}

export default LandingPage