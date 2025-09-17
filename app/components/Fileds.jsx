import Image from 'next/image'
import React from 'react'

const Fileds = () => {
  return (
    <div className='w-screen h-screen bg-amber-100 text-[10vh]'>
        <div className=' absolute w-full h-full '>
            <Image alt='fantasy' className='object-cover' fill src={"/rendering.jpg"}/>
        </div> 
        <p>Traverse the Aurora Fields, where blossoms shimmer beneath eternal twilight, and the air hums with the whispers of forgotten spirits.</p>
    </div>
  )
}

export default Fileds