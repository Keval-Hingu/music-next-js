"use client"
import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black text-white'>
      <div className='text-center '>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className='text-blue-500 ' href="/">Go back home</Link>

      </div>
    </div>
  )
}

export default NotFound
