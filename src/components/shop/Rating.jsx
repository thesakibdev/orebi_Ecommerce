import React from 'react'
import { FaStar } from "react-icons/fa";


const Rating = () => {
  return (
    <div className='mt-3 flex gap-1'>
        <FaStar className='text-[#FFD881] text-xs' />
        <FaStar className='text-[#FFD881] text-xs' />
        <FaStar className='text-[#FFD881] text-xs' />
        <FaStar className='text-[#FFD881] text-xs' />
        <FaStar className='text-[#FFD881] text-xs' />
    </div>
  )
}

export default Rating