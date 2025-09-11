import React from 'react'

const HomePage = () => {
    return (
        <div className="h-screen bg-[url('/Zoky.jpg')] bg-cover bg-center bg-black/60 bg-blend-multiply">
            <div className='flex flex-col justify-content-center items-center text-center text-white px-6 py-20 gap-6'>
                {/* Main content can go here */}
                <div className='w-1/2 text-lg flex gap-6 mt-20'>
                    <p className='w-1/2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, reprehenderit possimus
                        maiores provident ea harum. Quae explicabo sunt pariatur consequatur tenetur qui! Sint
                        aliquid, aperiam enim esse temporibus explicabo cum!
                    </p>
                    <p className='w-1/2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, reprehenderit possimus
                        maiores provident ea harum. Quae explicabo sunt pariatur consequatur tenetur qui! Sint
                        aliquid, aperiam enim esse temporibus explicabo cum!
                    </p>

                </div>

                <div>
                    <button className='font-mono mr-6 bg-white px-6 py-2 rounded-full text-gray-900 hover:bg-gray-200 cursor-pointer'>
                        Te hahafantatra misimisy kokoa
                    </button>
                    <button className='font-mono bg-red-500 px-6 py-2 rounded-full text-white hover:bg-red-600 cursor-pointer'>
                        Hiditra ho mpikambana
                    </button>
                </div>
            </div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 animate-bounce text-red-500 mx-auto mt-10 bg-white rounded-full p-2 hover:cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

        </div>
    )
}

export default HomePage
