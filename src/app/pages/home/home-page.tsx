"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const HomePage = () => {
    const router = useRouter();
    const handleRegisterClick = () => {
        router.push('/register');
    }
    return (
        <div className="min-h-screen bg-black/60 bg-blend-multiply">
            <div className='flex flex-col justify-content-center items-center text-center text-white px-6 py-20 gap-6'>
                {/* Main content can go here */}
                <div>
                    <h1 className='font-sans text-3xl font-bold mt-15 animate-bounce'>Tongasoa eto amin'ny FAMATO</h1>
                </div>
                
                <div className='w-1/2 text-lg flex flex-col lg:flex-row gap-6 mt-40'>
                    <div className='w-1/2'>
                    <h3 className='font-sans text-2xl'>Famaritana</h3>
                        Ny FAMATO na Fivondronan'ny Ara-bazimba Manankasina Tompontany dia vondrona iray niforona tamin'ny taona .... 
                        izay tarihan'i Andrianarisoa Ankoay. Ny kolontsaina malgasy, ny fomba amam-panao, ny fady, ny tantara 
                        sy ireo maro hafa no hezahina hifampizarana ao anatin'ny vondrona.
                    </div>
                    <div className='w-1/2'>
                    <h3 className='font-sans text-2xl'>Tanjona</h3>
                        Maro ny tanjon'ny FAMATO eo anivon'ny firenena sy ny fiarahamonina malagasy, raha tsy hilaza hafa tsy ny: 
                        Famerenena "an-doharano" ny malagasy, ny fampiroboroboana ny kolontsaina sy ny soatoavina malagasy, anisan'izay ny 
                        fikarakarana ny taom-baovao malagasy isan-taona.
                    </div>

                </div>

                <div>
                    <button className='font-mono mr-6 bg-white px-6 py-2 rounded-full text-gray-900 hover:bg-gray-200 cursor-pointer'>
                        Te hahafantatra misimisy kokoa
                    </button>
                    <button onClick={handleRegisterClick} className='font-mono bg-red-500 px-6 py-2 rounded-full text-white hover:bg-red-600 cursor-pointer'>
                        Hiditra ho mpikambana
                    </button>
                </div>
            </div>
            <a href="#tahiry">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 animate-bounce text-red-500 mx-auto mt-10 bg-white rounded-full p-2 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            </a>
        </div>
    )
}

export default HomePage
