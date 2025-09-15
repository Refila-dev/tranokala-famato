import React from 'react'
import  Image  from 'next/image';

const Archive = () => {
  return (
    <div className='bg-black/60 bg-blend-multiply min-h-screen'>
        <div className='flex flex-col justify-content-center items-center text-center text-white px-6 py-20 gap-6'>
        <h1>Ireo tahiry voarakitra</h1>
     <div className='flex flex-col lg:flex-row gap-6 mt-10'>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident pariatur asperiores dolores excepturi quam aliquam corrupti eveniet, 
                rerum ab distinctio laborum culpa quod! Sed ab ullam rem a nostrum.
            </p>
        </div>
        <div>
            <div>
                 <Image src="/Zoky.jpg" alt="Zoky" width={300} height={200} />
            </div>
        </div>
     </div> 
 
        </div>
   </div>
  )
}

export default Archive
