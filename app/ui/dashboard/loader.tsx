import React from 'react'
import Image from 'next/image'
import loader from '@/public/fade-stagger-circles.svg'

const Loader = () => {
  return (
    <div className='w-[200px] mx-auto'>
       <Image 
         src={loader}
         alt='loader'
       />
    </div>
  )
}

export default Loader