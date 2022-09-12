import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <div>
          <div>
              <h3>what we do</h3>
              <p>roads</p>
              <p>water</p>
              <p>building</p>
              <p>quarries</p>
          </div>
          <div>
              <h3>products</h3>
              <p>ON-GOING PROJECTS</p>
              <p>COMPLETED PROJECTS</p>
          </div>
          <div>
              <h3>Contact</h3>
              <p>NEWS</p>
              <p>Gallery</p>
          </div>
          <div>
              <form action="">
                  <h3>Contact Us</h3>
                  <div>
                      <input placeholder='*Name' type="text" />
                  </div>
                  <div>
                      <input placeholder='*Name' type="text" />
                  </div>
                  <div>
                      <input placeholder='*Name' type="text" />
                  </div> <div>
                      <input value="send" type="submit" />
                  </div>
            </form>
          </div>
          <div>
              <nav>
                <ul>
                    <li>
                        <Link  href=""><a>home page | </a></Link>
                      </li>
                      <li>
                        <Link  href=""><a>home page | </a></Link>
                      </li>
                      <li>
                        <Link  href=""><a>home page | </a></Link>
                      </li>
                      <li>
                        <Link  href=""><a>home page | </a></Link>
                    </li>
                </ul>
              </nav>
              <div className="relative">
                  <Image src="/imagesdaronet_logo.git" layout="fill" />
              </div>
          </div>
    </div>
  )
}

export default Footer