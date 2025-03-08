import React from 'react'
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='fixed top-0 z-10 bg-blue-600 rounded-b-lg shadow-lg w-full p-2 flex items-center gap-2'>
        <img src={Logo} className='w-8' alt="" />
        <span className='text-xl text-white font-semibold font-bree-serif leading-relaxed'>Jadwal Harian</span>
        {/* <div className="flex justify-end ml-auto">
           <Link to='/'>
           <h1 className='text-white font-bree-serif hover:text-sky-200 hover:scale-95 duration-300 transform'>Home</h1>
           </Link>
           <Link to='add-data'>
           <h1 className='text-white font-bree-serif hover:text-sky-200 hover:scale-95 duration-300 transform'>Home</h1>
           </Link>
           <Link to='add-data'>
           <h1 className='text-white font-bree-serif hover:text-sky-200 hover:scale-95 duration-300 transform'>Home</h1>
           </Link>
        </div> */}
    </div>
  )
}

export default Navbar