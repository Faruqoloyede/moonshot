import React from 'react'
import cat from "../assets/image 19.png";
import chart from "../assets/chart.png"
import { trading } from '../constant';

const Trading = () => {
  return (
    <section className='sm:py-16 py-6' >
      <div className='flex flex-col items-center'>
        <h1 className='text-white sm:text-[48px] text-[40px] font-poppins mb-4 sm:text-center text-start leading-normal'>Earn 50% of trading fees from<br className='sm:block hidden' /> each friend you refer.</h1>
        <p className='text-white text-[18px] text-center'>Discover how moonshot works — and get a bit of each<br /> meme coin to try out for yourself.</p>
        <div className='flex sm:flex-row flex-col items-center justify-center gap-10 mt-10'>
          {trading.map((item, index)=>(
            <div className='flex flex-col items-start bg-black p-6 rounded-[18px]' key={index}>
            <div className='flex items-center'>
              <img src={item.icon} className='w-[35px] mr-2 object-contain' />
              <div className='flex flex-col items-start'>
                <p className='text-white text-[12px]'>{item.name}</p>
                <span className='text-white text-[12px]'>{item.subname}</span>
              </div>
            </div>
            <img src={item.image} alt="" />
            <div className='flex flex-col items-start mt-5'>
              <span className='text-white'>{item.price}</span>
              <span className='text-white'>{item.market}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trading