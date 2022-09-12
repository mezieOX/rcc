import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="text-gray-400 bg-gray-800 transition ease-in-out duration-100">
      <div className="grid grid-cols-2 items-start lg:grid-cols-4 mt-5 px-2 py-4 gap-y-8 lg:gap-y-0 overflow-x-scroll scrollbar-hide">
        <div className="text-xs lg:text-base uppercase">
          <h3 className="text-sm lg:text-base capitalize text-gray-100 py-2">what we do</h3>
          <p>roads</p>
          <p>water</p>
          <p>building</p>
          <p>quarries</p>
        </div>
        <div className="text-xs lg:text-base uppercase">
          <h3 className="text-sm lg:text-base capitalize text-gray-100 py-2">products</h3>
          <p>ON-GOING PROJECTS</p>
          <p>COMPLETED PROJECTS</p>
        </div>
        <div className="text-xs lg:text-base uppercase">
          <h3 className="text-sm lg:text-base capitalize text-gray-100 py-2">Contact</h3>
          <p>NEWS</p>
          <p>Gallery</p>
        </div>
        <div className="text-xs lg:text-base uppercase">
          <form action="">
            <h3 className="text-base lg:text-lg capitalize text-gray-100 py-2">
              Contact Us
            </h3>
            <div className="w-[100%]  my-3">
              <input
                placeholder="*Name"
                type="text"
                className="transition duration-300 ease-out focus:!bg-transparent border pl-1 placeholder:text-xs text-xs lg:placeholder:text-sm lg:text-sm outline-none w-[100%]"
              />
            </div>
            <div className="w-[100%]  my-3">
              <input
                placeholder="Phone"
                type="number"
                className="transition duration-300 ease-out focus:!bg-transparent border pl-1 lg:placeholder:text-sm lg:text-sm placeholder:text-xs text-xs outline-none w-[100%]"
              />
            </div>
            <div className="w-[100%]  my-3">
              <input
                placeholder="*E-Mail"
                type="text"
                className="transition duration-300 ease-out focus:!bg-transparent border pl-1 placeholder:text-xs text-xs outline-none w-[100%] lg:placeholder:text-sm lg:text-sm "
              />
            </div>{' '}
            <div>
              <input
                value="send"
                type="submit"
                className="bg-red-600 lg:lg:px-4 lg:py-2 px-2 py-1 text-white"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="overflow-x-scroll w-full scrollbar-hide bg-gray-900 h-12 flex items-center justify-between space-x-20 transition lg:justify-center ">
        <nav>
          <ul className="flex items-center text-xs lg:text-sm space-x-4">
            <li>
              <Link href="/">
                <a className="flex w-max">
                  home page <span className="px-2">|</span>{' '}
                </a>
              </Link>
            </li>
            <li>
              <Link href="site">
                <a className="flex w-max">
                  site map <span className="px-2">|</span>{' '}
                </a>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <a className="flex w-max">
                  contact <span className="px-2">|</span>{' '}
                </a>
              </Link>
            </li>
            <li>
              <Link href="accessibility">
                <a className="flex w-max">Accessibility Statement </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="py-2 flex items-center space-x-2 w-max">
          <Image src="/images/daronet_logo.gif" width={100} height={30} className="shrink-0" />{' '}
          <p className="text-xs lg:w-[8rem] w-[12rem]">Daronet Web Building</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
