import React, { useEffect, useState } from 'react'
import NavBar from '/components/NavBar'
 

export default function contact()
{
    return(
        <>
        <NavBar/>
      <div className='w-full  h-full flex items-center lg:justify-start py-24 justify-center flex-wrap  '>
        <div className='lg:w-3/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-4 md:items-start md:justify-start md:p-20 flex-col '>
          <h1 className='md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-black '>Feel free <span className='text-rose-600'>to reach out.</span> </h1>
          <p className='md:text-2xl sm:text-sm text-2xl font-extrabold mb-5 text-gray-600'>  Customer-care: 132880090  </p>
          <p className='md:text-2xl sm:text-sm text-xs mb-5 font-extrabold text-gray-600'>Mail:message@Travel-It.com</p>

          </div>
          </div>
          </>
    )
}