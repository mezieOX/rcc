import React from 'react'
import Header from '../header/Header'

function Layout({children}) {
  return (
      <div className='z-20 flex flex-col min-h-screen text-white bg-black'>
          <div className=''><Header /></div>
          <div className='flex-grow md:-mt-6 flex flex-col justify-center md:block'>{children}</div>
          <div>Footer</div>
    </div>
  )
}

export default Layout