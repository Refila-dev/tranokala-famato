import React from 'react'
import  Image  from 'next/image';

const Archive = () => {
  return (
      <div className='bg-black/90 bg-blend-multiply min-h-screen'>
          <h1 className='text-center font-mono text-3xl font-bold py-10'>Ireo tahiry voarakitra</h1>
          <div className='flex flex-col lg:flex-row justify-content-center items-center text-white w-1/2 mx-auto py-20'>
              <div className='w-full h-[400px] bg-white p-4'>
                  <h1 className='text-black text-center font-bold'>Ny Filoha</h1>
                  <p className='text-center text-black'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident pariatur asperiores dolores excepturi quam aliquam corrupti eveniet,
                      rerum ab distinctio laborum culpa quod! Sed ab ullam rem a nostrum.
                  </p>
              </div>
              <div className='w-full h-[400px] bg-red-500 flex justify-center items-center p-4'>
                  <Image
                      className="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                      src="/filoha.jpg"
                      alt="Zoky"
                      width={450}
                      height={300}
                  />
              </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-content-center items-center text-white w-1/2 mx-auto py-20'>
              <div className='w-full h-[400px] bg-red-500 flex justify-center items-center p-4 rounded-l-lg'>
                  <Image
                      className="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                      src="/user.jpeg"
                      alt="Zoky"
                      width={450}
                      height={300}
                  />
              </div>
              <div className='w-full h-[400px] bg-white p-4'>
                  <h1 className='text-black text-center font-bold'>Ny Mpanolotsaina</h1>
                  <p className='text-center text-black'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident pariatur asperiores dolores excepturi quam aliquam corrupti eveniet,
                      rerum ab distinctio laborum culpa quod! Sed ab ullam rem a nostrum.
                  </p>
              </div>

          </div>
      </div>
  )
}

export default Archive
