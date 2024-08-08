import React from 'react'

const Newsletter = () => {
  return (
    <section className='sm:py-16 py-6 sm:px-16 px-6'>
        <div className='flex sm:flex-row flex-col items-center justify-center gap-10'>
            <div className='bg-black sm:p-8 p-3 flex flex-col items-start rounded-[14px] h-[300px] '>
                <h2 className='text-white font-semibold font-sans text-[30px] mb-5'>Moonshot update</h2>
                <p className='text-white font-sans font-normal text-18px] max-w-[350px]'>Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.</p>
                <div className='flex items-center bg-primary mt-10 h-[50px] rounded-full'>
                    <input type="text" className='bg-transparent border-none outline-none text-white p-3' placeholder='Email' />
                    <button className='bg-gradient text-primary rounded-full h-[50px]  w-[100px] font-bold'>Sign up</button>
                </div>
            </div>
            <div className='bg-black sm:p-8 p-3 flex flex-col items-start rounded-[14px] h-[300px] '>
                <h2 className='text-white font-semibold font-sans text-[30px] mb-5'>For more information</h2>
                <p className='text-white font-sans font-normal text-18px] max-w-[350px]'>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.</p>
                <div className='flex items-center justify-between gap-10 mt-10'>
                    <button className='bg-transparent text-white rounded-full h-[50px] px-10 border border-white font-bold btn'>YouTube</button>
                    <button className='bg-transparent text-white rounded-full h-[50px] px-10 border border-white   font-bold btn'>Twitter (x)</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter