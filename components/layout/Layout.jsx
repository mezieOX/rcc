import React from 'react'
import Header from '../header/Header'

function Layout({children}) {
  return (
      <div className="flex flex-col min-h-screen justify-between">
          <header><Header /></header>
          <main className="flex-grow">{children}</main>
          <footer>Footer</footer>
    </div>
  )
}

export default Layout