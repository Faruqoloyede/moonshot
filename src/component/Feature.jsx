import React from 'react'
import { stat } from '../constant'

const Feature = () => {
  return (
    <section className='sm:py-16 py-6'>
        <h2 className='text-white sm:text[48px] text-[40px] font-sans font-medium text-center mb-3'>Create your crypto <br className='sm:block hidden' />currency portfolio today</h2>
        <p className='text-white text-[18px] text-center font-sans font-normal'>Moonshot has a variety of features that makes it the<br className='sm:block hidden' /> best place to start trading.</p>
        <div className='flex sm:flex-row flex-col items-center justify-center gap-10 mt-5'>
           {stat.map((item)=>(
             <div className='bg-black flex flex-col items-center justify-center p-6'>
             <img src={item.icon} alt="" />
             <div className='flex flex-col items-center justify-center'>
                 <h4 className='text-white text-xl my-3 font-sans '>{item.title}</h4>
                 <p className='text-white text-[14px] max-w-[380px] text-center font-sans font-light'>{item.text}</p>
             </div>
            </div>
           ))}
        </div>
    </section>
  )
}

export default Feature