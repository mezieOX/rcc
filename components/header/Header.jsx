import React, { useRef } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { useEffect } from 'react';

function Header() {
  const headerRef = useRef();
  useEffect(() => {
    const lastScrollTop = 20;
        window.addEventListener('scroll', function () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            headerRef.current.style.backgroundColor = 'gray';
          } else {
              headerRef.current.style.backgroundColor = "black"
          }
    })
  },);

  return (
    <div>
      <div
        className="z-40 fixed mt-5 md:top-10 bg-transparent flex justify-between items-center w-full px-2 md:px-8 transition duration-300 ease-out"
        ref={headerRef}
      >
        <div className=" flex items-center">
          <div className="hidden lg:inline-flex mr-2 md:mr-4">
            <Image
              src="/images/1226267-middle.png"
              width={100}
              height={80}
              className="shadow-xl"
            />
          </div>
          <p className="w-48 font-bold md:text-normal text-xs">
            LIVING FAITH <br /> CHURCH WORLDWIDE INTERNATIONAL
          </p>
        </div>
        <div className="relative">
          <Menu>
            <Menu.Button className="shadow bg-white md:px-8 md:py-4 px-2 py-1 uppercase font-[400] active:scale-90 duration-200 ease-in transition rounded text-black text-sm md:text-normal">
              Menu
            </Menu.Button>
            <Menu.Items className="fixed top-1/6 md:top-32 bg-white shadow-xl border right-[10px] w-[200px] md:w-[300px] md:right-20 h-[60%] md:h-[65%] text-black font-[400] md:text-[18px] text-[10px] overflow-y-scroll scrollbar-hide lg:h-[40%] m-1 xl:h-[30%] 2xl:h-[20%] flex flex-col justify-between items-start">
              <Link href="/">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => (
                    <div className="">
                      <a>home</a>
                    </div>
                  )}
                </Menu.Item>
              </Link>
              <Link href="about">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => (
                    <div className="">
                      <a>About us</a>
                    </div>
                  )}
                </Menu.Item>
              </Link>
              <Link href="media-center">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => (
                    <div className="">
                      {' '}
                      <a> media center </a>{' '}
                    </div>
                  )}
                </Menu.Item>
              </Link>
              <Link href="media-center">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => <div className="">WOFBI</div>}
                </Menu.Item>
              </Link>
              <Link href="christian-family">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => <div className="">christian family</div>}
                </Menu.Item>
              </Link>
              <Link href="downloads">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => <div className="">downloads</div>}
                </Menu.Item>
              </Link>
              <Link href="education">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => <div className="">education</div>}
                </Menu.Item>
              </Link>
              <Link href="contact-us">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => <div className="">contact us</div>}
                </Menu.Item>
              </Link>
              <Link href="give-online">
                <Menu.Item className="transition duration-200 hover:bg-black hover:text-white px-3 py-2 md:px-6 md:py-4 ease-out uppercase w-full">
                  {({ active }) => <div className="">give online</div>}
                </Menu.Item>
              </Link>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
