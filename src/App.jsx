import React from 'react'
import { Hero, Navbar, Trading } from './component'
import Feature from './component/Feature'
import Feedback from './component/Feedback'
import Newsletter from './component/Newsletter'

const App = () => {
  return (
   <div className='bg-primary overflow-hidden w-full'>
      <div className='px-6 sm:px-16 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
            <Navbar />
        </div>
      </div>
      <div className='flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      <div className='sm:px-16 px-6 flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
            <Trading />
            <Feature />
            <Feedback />
            <Newsletter />
          </div>
        </div>
   </div>
  )
}

export default App