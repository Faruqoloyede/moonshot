 import React from 'react'
 import logo from "../assets/logo.png";
import { links } from '../constant';

 
 const Navbar = () => {
   return (
     <nav className='w-full py-6 flex justify-between items-center'>
        <a href="#" className='text-white flex items-center font-sans font-[500]'>
            <img src={logo} alt="logo" />
           <span className='mx-1 text-xl'>moonshot</span>
        </a>
        <ul className='list-none sm:flex hidden justify-center flex-1'>
            {links.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`} className='text-white font-sans text-[16px] mr-10 cursor-pointer'>{link.title}</a>
                </li>
            ))}
        </ul>
        <button><a href="#" className='bg-gradient rounded-full px-8 py-3 text-white font-sans font-[700] cursor-pointer'>Get the App</a></button>
     </nav>
   )
 }
 
 export default Navbar