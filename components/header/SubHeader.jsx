import React from 'react';
import Link from 'next/link';

function SubHeader() {
  return (
    <div className="w-full h-10 lg:h-14 lg:mt-4  overflow-x-scroll scrollbar-hide transition duration-200 linear">
      <nav className="">
        <ul className="flex items-center lg:justify-center mt-2 text-xs sm:text-base lg:text-lg xl:text-xl capitalize text-gray-500">
          <li>
            <Link href="who">
              <a className="flex items-center w-max"><span className="hover:text-red-500">Who we are </span><span className="px-2 sm:px-8  xl:px-14 text-[5px] lg:text-[10px] xl:text-sm">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="what">
              <a className="flex items-center w-max"><span className="hover:text-red-500">what we do</span> <span className="px-2 sm:px-8 xl:px-14 text-[5px] lg:text-[10px] xl:text-sm">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="gallery">
              <a className="flex items-center w-max"><span className="hover:text-red-500">gallery</span> <span className="px-2 xl:px-14 sm:px-8 text-[5px] lg:text-[10px] xl:text-sm">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="project">
              <a className="flex items-center w-max"><span className="hover:text-red-500">our project </span>  <span className="px-2 sm:px-8 xl:px-14 text-[5px] lg:text-[10px] xl:text-sm">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="news">
              <a className="flex items-center w-max"><span className="hover:text-red-500">news</span> <span className="px-2 sm:px-8 xl:px-14 text-[5px] lg:text-[10px] xl:text-sm">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="contact">
            <a className="flex items-center w-max"><span className="hover:text-red-500">contact / career</span></a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubHeader;
