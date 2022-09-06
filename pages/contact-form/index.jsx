import { Button } from '@material-ui/core'
import React from 'react'
import Layout from '../../components/layout/Layout'

function ContactForm() {
  return (
      <div>
          <Layout title="Contact Form">
          <form action="">
          <div className='h-screen w-full flex items-center justify-center flex-col my-10'>
                  <div className='w-[80%] lg:w-1/2'>
              <div className='flex my-4 items-center space-x-4'>
                  <label htmlFor="name" className='lg:text-lg  text-xs uppercase'>Name</label>
                  <input type="text" placeholder='Enter your name' required id="name" className='leading-tight appearance-none w-full lg:h-10 pl-2 rounded bg-transparent border h-7 lg:placeholder:text-normal placeholder:text-[10px]' />
              </div>
              <div className='flex my-4 items-center space-x-4'>
                  <label htmlFor="email" className='text-lg uppercase'>Email</label>
                  <input type="email" placeholder='Enter your Email Address' required id="email" className='leading-tight appearance-none w-full h-10 pl-2 rounded bg-transparent border' />
              </div>
                      </div>
                      <div className='text-center'>
                          <textarea name="" id="" cols="80" rows="10" className='bg-transparent border rounded text-white w-[80%]'>
                              
                          </textarea>
                      </div>
                  </div>
                  <input type="submit" value="submit" />
              </form>
              </Layout>
    </div>
  )
}

export default ContactForm