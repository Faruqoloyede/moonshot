import React from 'react'
import support from "../assets/support.png"
import { feedback } from '../constant'

const Feedback = () => {
  return (
    <section  className='sm:py-16 py-6 sm:px-16 px-6'>
        <div className='flex flex-col items-center'>
            <h1 className='text-white text-center font-sans font-bold sm:text-[48px] text-[30px] mb-3'>The most trusted</h1>
            <p className='text-white text-center text[18px] font-sans font-normal'>Be rest assured, we've got your meme assets stored safely and securely.</p>
        </div>
        <div className='flex sm:flex-row flex-col items-center justify-between gap-10 mt-20'>
            {feedback.map((item, index)=>(
                <div className='flex flex-col items-center' key={index}>
                <img src={item.icon} alt="name" />
                <h4 className='text-white text-[30px] font-bold font-sans my-5'>{item.text}</h4>
                <p className='text-white text[20px] font-normal font-sans'>{item.title}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Feedback