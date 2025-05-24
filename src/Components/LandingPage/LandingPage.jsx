import React from 'react'
import img from "../../assets/img/image.webp"
import { Link } from 'react-router'

const LandingPage = () => {
  return (
    <div className=' relative w-full h-screen'>
      <img src={img} alt="background image" className='w-full h-full object-cover' />

      <div className='absolute top-1  h-full flex flex-col justify-center text-white mx-7 lg:left-20'>
       <h1 className='text-4xl md:text-6xl font-bold'>Register <br /> your store <br /> name now!</h1>
        <p className='text-lg md:text-xl mt-4 font-bold '>With etail.me, anyone can earn their <br />first dollar online. Just   start with what <br />you know. it's that easy.</p>
        <Link to="/" className='text-lg md:text-xl pt-2 mt-2  bg-black rounded-full p-1 max-w-sm sm:text-white '><strong>my store</strong> | Enter your store name now  →</Link>

      </div> 
    </div>



  )
}

export default LandingPage