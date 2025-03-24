import React from 'react'
import Card1 from './card1'

const Card = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
        <div className='px-[15px] border-l-4 border-[#f48c4b] pl-4'>
          <span className='text-[#f48c4b] text-sm uppercase'>Some of our blog</span>
          <h1 className='text-3xl md:text-[46px] font-semibold'>Our latest news</h1>
        </div>
        <div className='px-[15px] text-[#666666] text-[16px]'>
          <p>
            The argument in favor of using filler text goes something like this: If you use real content in the design 
            process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Card1 />
      </div>
    </div>
  )
}

export default Card
