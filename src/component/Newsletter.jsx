import React from 'react'

const Newsletter = () => {
  return (
    <section className='sm:py-16 py-6 sm:px-16 px-6'>
        <div className='flex sm:flex-row flex-col items-center justify-center gap-10'>
            <div className='bg-black p-8 flex flex-col items-start rounded-[14px] '>
                <h2 className='text-white font-semibold font-sans text-[30px]'>Moonshot update</h2>
                <p className='text-white font-sans font-normal text-18px] max-w-[350px]'>Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.</p>
                <div className='flex items-center bg-primary mt-5 h-[40px] rounded-full'>
                    <input type="text" className='bg-transparent border-none outline-none text-white p-3' placeholder='Email' />
                    <button className='bg-gradient text-primary rounded-full h-[35px] px-3 font-normal'>Sign up</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter