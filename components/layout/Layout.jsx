import React from 'react'

function Layout({children}) {
  return (
      <div className="flex flex-col min-h-screen">
          <header>Header</header>
          <main className="flex-1">{children}</main>
          <footer>Footer</footer>
    </div>
  )
}

export default Layout