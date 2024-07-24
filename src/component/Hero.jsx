import React from 'react'
import dog from "../assets/image 28.png";
import car from "../assets/image 24.png";
import cat from "../assets/image 19.png";
import head from "../assets/image 20.png";
import mou from "../assets/image 26.png";
import lo from "../assets/image 29.png";
import carr from "../assets/image 22.png";
import { FaPlayCircle } from "react-icons/fa";
import { feature } from '../constant';


const Hero = () => {
  return (
    <section className='sm:py-16 py-6 text-center'>
        <div className='flex items-start justify-center gap-[100px]'>
            <div className='flex flex-col gap-[150px]'>
                <img src={dog} alt="" className='w-[30px]' />
                <img src={car} alt=""  className='w-[30px]'/>
            </div>
            <div>
                <h1 className='text-white text-6xl font-poppins mb-4'>Quick way to buy and sell<br /> meme coins</h1>
                <p className='text-white text[18px] font-sans'>Moonshot offers a convenient platform for purchasing and exchanging<br /> memes using Apple Pay.</p>
                <div className='flex items-center justify-center gap-5 mt-10'>
                    <button><a href="#" className='bg-gradient rounded-full px-8 py-3 text-white font-sans font-[700] cursor-pointer'>Download Here</a></button>
                    <button><a href="#" className='bg-grey rounded-full px-8 py-3 text-white font-sans font-[700] cursor-pointer border-border flex items-center'>
                    <FaPlayCircle className='mr-4' />View demo</a></button>
                </div>
            </div>
            <div className='flex flex-col gap-[150px]'>
                <img src={cat} alt="" className='w-[30px]' />
                <img src={head} alt=""  className='w-[30px]'/>
            </div>
        </div>
        <div className='flex items-center justify-evenly mt-10'>
        <img src={mou} alt="" className='w-[30px]' />
        <img src={lo} alt=""  className='w-[30px]'/>
        <img src={carr} alt=""  className='w-[30px]'/>
        </div>
        <div className='flex items-center justify-center gap-10 pt-20'>
            {feature.map((item, index)=>(
                <div className='flex items-center' key={index}>
                    <img src={item.icon} alt="check" className='bg-lightblue p-1 w-[18px] rounded-full mr-3' />
                    <p className='text-white font-sans font-[400] text[16px]'>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Hero