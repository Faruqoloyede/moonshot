import React from 'react'

const Earnings = () => {
  return (
    <div className='sm:py-16 py-6 sm:px-16 px-6 earnings'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white sm:text-[40px] text-[30px] text-center font-bold font-sans'>Earn up to unlimited<br className='sm:block hidden' /> worth of meme.</h1>
            <div className='flex flex-col items-center justify-center'>
                <button className='bg-gradient text-white text-semibold font-sans p-4 mt-10 rounded-[5px]'>Start earning</button>
            </div>
        </div>
    </div>
  )
}

export default Earnings