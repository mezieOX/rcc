import React from 'react'
import Layout from '../components/layout/Layout'

function NotFound() {
  return (
      <Layout title="Page Not Found">
          <div className="flex justify-center items-center w-full min-h-full text-sm sm:text-base lg:text-3xl xl:text-lg font-[600] py-[50%] sm:py-[17%] lg:py-[13%] xl:py-[10%]">
              404: Page Not Found 😿 
          </div>
</Layout>
  )
}

export default NotFound