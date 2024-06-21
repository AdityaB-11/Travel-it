import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Image from 'next/image'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
//import Link from 'next/link';

export default function Intro() {
  const [search, setSearch] = useState('');
  



 
  return (
    <>
      <div className='w-full  h-full flex items-center lg:justify-start py-24 justify-center flex-wrap  '>
        <div className='lg:w-3/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-4 md:items-start
         md:justify-start md:p-20 flex-col '>
          <h1 className='md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-black '>To Make 
          <span className='text-rose-600'>Perfect Travel Plan</span> </h1>
          
          <div className='bg-white flex-col mb-6 w-full md:px-4   py-4 flex sm:flex-row items-center justify-center'>
            <BiSearchAlt className='text-2xl text-rose-600 mx-2 hidden sm:flex' />
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search any Country or location 
             ' className='xs:w-full w-3/4  h-full px-2 bg-gray-200 text-base py-3 outline-none' />
            <button   className='px-3 py-2 my-2 sm:my-0 border border-rose-600 rounded uppercase tracking-widest mx-4 
              text-white bg-rose-600 transition-all duration-700 hover:bg-transparent font-semibold text-base
               hover:text-rose-600'>Search</button>
          </div>
          <div className=' w-full px-2 py-2 flex items-center justify-start flex-wrap'>
            <div className='flex items-center justify-center'>
              <BsFillBookmarkFill className='text-rose-600 text-xl mx-2' />
              <h1 className='font-semibold text-lg'>Suggested Locations : </h1>
            </div>
            <div className='flex   items-center justify-center px-4 flex-wrap'>
              <p className='px-2  text-gray-600'>Tokyo,Japan </p>
              <p className='px-2  text-gray-600'>Mumbai,India</p>
              <p className='px-2  text-gray-600'>Bali,Indo</p>
            </div>
          </div>
        </div>
        <div className='w-3/6 my-2 h-full bg-white hidden items-center justify-center flex-col p-20 lg:flex'>
          <Image width={400} height={500} src="/intro1.png" alt="no-image-found" />
        </div>
      </div>
      
    </>
  )
}


