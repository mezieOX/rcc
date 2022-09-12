import React from 'react';
import Link from 'next/link';

function SubHeader() {
  return (
    <div className="w-full h-10  overflow-x-scroll scrollbar-hide">
      <nav className="">
        <ul className="flex items-center mt-2 text-xs capitalize text-gray-500">
          <li>
            <Link href="">
              <a className="flex items-center w-max"><span className="hover:text-red-500">Who we are </span><span className="px-2 xl:px-10 text-[5px] ">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="">
              <a className="flex items-center w-max"><span className="hover:text-red-500">what we do</span> <span className="px-2 xl:px-10 text-[5px]">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="">
              <a className="flex items-center w-max"><span className="hover:text-red-500">gallery</span> <span className="px-2 xl:px-10 text-[5px]">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="">
              <a className="flex items-center w-max"><span className="hover:text-red-500">our project </span>  <span className="px-2 xl:px-10 text-[5px]">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="">
              <a className="flex items-center w-max"><span className="hover:text-red-500">news</span> <span className="px-2 xl:px-10 text-[5px]">|</span></a>
            </Link>
                  </li>
                  <li>
            <Link href="">
              <a className="flex items-center w-max"><span className="px-2 xl:px-10 text-[5px]">contact / career</span></a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubHeader;
