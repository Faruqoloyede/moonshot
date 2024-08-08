import React from 'react'
import logo from "../assets/logo.png";
import { footer_link } from '../constant';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='sm:pt-16 py-6 sm:px-16 px-6'>
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-20 '>
            <div className='flex flex-col items-start'>
                <a href="#" className='text-white flex items-center font-sans font-[500]'>
                    <img src={logo} alt="logo" />
                    <span className='mx-1 text-xl'>moonshot</span>
                </a>
                <p className='text-white font-sans font-normal mt-5 text[18px]'>Moonshot offers a convenient platform for purchasing and exchanging<br />memes using Apple Pay.</p>
            </div>
            {footer_link.map((footerlink)=>(
                <div className='flex flex-col'>
                    <p className='text-white text-[20px] font-normal'><a href="">{footerlink.title}</a></p>
                    <ul className='list-none mt-5'>
                        {footerlink.links.map((item)=>(
                            <li className='text-white text-[18px] mb-5 font-normal'>{item.text}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className='flex sm:flex-row flex-col items-center mt-10 justify-between gap-20'>
        <div className='flex items-center gap-10 text-white  text-xl cursor-pointer'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaXTwitter />
            <FaGoogle />
        </div>
        <p className='text-white text-[16px] '>© 2024 moonshot. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer