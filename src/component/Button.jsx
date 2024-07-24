import React from 'react'

const Button = ({ text, bg }) => {
  return (
    <div>
        <button className={`rounded-full px-8 py-3 text-white font-sans font-[700] cursor-pointer ${bg}`}><a href="">{text}</a></button>
    </div>
  )
}

export default Button