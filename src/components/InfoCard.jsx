import React from 'react'

const InfoCard = (props) => {

    const img = props.img
    const description = props.description
    const title = props.title

  return (
    <>
        <div className="z-20 relative w-[200px] h-[300px]
        md:w-[350px] md:h-[450px] mb-2 md:mb-0
        rounded-xl bg-gray transition-all duration-200 hover:scale-110
        hover:bg-opacity-85 cursor-pointer">
        <div className=' flex flex-col items-start gap-0 md:gap-2'>
            <img src={img} className='rounded-xl'></img>
            <h1 className='text-xl md:text-3xl px-3 py-1 md:px-5 md:py-2'>{title}</h1>
            <p className='px-3 py-1 md:px-5 md:py-2 text-sm md:text-xl'>{description}</p>
        </div>
        
      </div>
    </>
  )
}

export default InfoCard
