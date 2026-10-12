import React from 'react'
import {Link} from "react-scroll"

function Dropdown({isopen,toggle}) {
  return (
    
         <div className='md:hidden'>
    <ul onclick={toggle} className={isopen?'flex flex-col text-white justify-center items-center bg-black':'hidden'}>
    <Link to='home' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-10 py-2 cursor-pointer'>Home</li>
    </Link>
    <Link to='About Us' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-10 py-2 cursor-pointer'>About Us</li>
    </Link>
    <Link to='Sponcers' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-10 py-2 cursor-pointer'>Sponcers</li>
    </Link>
    <Link to='Contact' smooth={true } duration={500}>
    <li className='rounded-md hover:bg-red-500 px-5 py-2 cursor-pointer'>Contact</li>
    </Link>
        
    </ul>
  </div>
    
  )
}

export default Dropdown