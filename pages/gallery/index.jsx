import React from 'react'
import Layout from '../../components/layout/Layout'

function Gallery() {
  return (
      <Layout title="Gallery">
          <div className="flex justify-center items-center w-full min-h-full text-sm sm:text-base lg:text-3xl xl:text-lg  py-[50%] sm:py-[17%] lg:py-[13%] xl:py-[10%]">
              <span className="bg-gray-100 w-full text-center capitalize p-2">Gallery</span>
          </div>
     </Layout>
  )
}

export default Gallery