import React, { useEffect, useState } from 'react'
import NavBar from '/components/NavBar'
import Image from 'next/image'
 

export default function Guide()
{
    return(
        <>
        <NavBar/>
       <div className='items-center  px-64'>
      <Image width={800} height={900} src="/1.png" alt="no-image-found" />
      <Image width={800} height={900} src="/2.png" alt="no-image-found" />
      <Image width={800} height={900} src="/3.png" alt="no-image-found" />
      <Image width={800} height={900} src="/4.png" alt="no-image-found" />
      <Image width={800} height={900} src="/5.png" alt="no-image-found" />
      </div>
          </>
    )
}