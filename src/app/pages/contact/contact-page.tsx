import React from 'react'

const Contact = () => {
  return (
      <div className='bg-black/60'>
          <div className='py-10'>
              <h1 className='text-center font-sans text-3xl'>Fifandraisana</h1>
              <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
                  <div className='flex flex-col gap-6 bg-black/70 rounded-lg py-4 px-4'>
                      <p>tel: 033 12 452 85</p>
                      <p>email: famato@gmail.com</p>
                      <p>fb: Famato</p>
                  </div>
                  <div className='flex flex-col gap-6'>
                      <div className='flex  gap-4'>
                          <div className='flex flex-col gap-2'>
                              <label htmlFor="email" id='email'>Email</label>
                              <input type="email" id='email' className='bg-black/80 h-10 w-full br-5' placeholder='Email'/>
                          </div>
                          <div className='flex flex-col gap-2'>
                              <label htmlFor="name" id='name'>Anarana</label>
                              <input type="text" id='anarana' className='bg-black/80 h-10 w-full br-5' placeholder='Anarana'/>

                          </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="message" id='message'>Hafatra</label>
                        <textarea name="hafatra" className='bg-black/80 w-full' id="message" rows={4} placeholder='Hafatra'></textarea>
                      </div>
                      <div className='flex items-center'>
                          <button className='w-30 h-10 bg-red-400 text-black rounded-lg hover:cursor-pointer hover:bg-red-500'>
                              Alefa
                          </button>
                      </div>
                 </div>
              </div>
          </div>
      </div>
  )
}

export default Contact
