import React from 'react';
import Image from 'next/image';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import YoutubeIcon from '@material-ui/icons/Youtube';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import SubHeader from './SubHeader';

function Header() {
    return (
      <div>
      <div className="flex overflow-x-scroll px-2 py-2 items-center space-x-8 justify-between w-full scrollbar-hide ease-out transition duration-300 shadow">
          <div className="w-1/2">
          <div className="relative sm:h-20 h-7 lg:h-28 lg:w-[30rem] sm:w-[20rem] w-[7.2rem] xl:w-[40rem] xl:h-32 shrink-0">
            <Image src="/images/logo.jpg" layout="fill" objectFit='cover' />
              </div>
              </div>
          <div className="flex space-x-2 sm:space-x-3 xl:space-x-8 w-full items-center justify-end max-w-lg">
            <div className="flex space-x-1 sm:space-x-2">
              <div>
                  <PhotoCameraIcon className="!text-gray-500 sm:!text-lg !text-xs lg:!text-xl xl:text-2xl" />
              </div>
              <div>
                  <YoutubeIcon className="sm:!text-lg !text-gray-500 !text-xs lg:!text-xl xl:text-2xl" />
              </div>
              <div>
                  <InstagramIcon  className="sm:!text-lg !text-gray-500 !text-xs lg:!text-xl xl:text-2xl" />
              </div>
            </div>
            <div className="flex items-center pr-2 border rounded bg-white focus:shadow-blue-100 focus:shadow-lg">
              <input
                type="text"
                placeholder="<Search>"
                className="outline-none xl:border-[1px] h-full placeholder:text-gray-600 pl-1 rounded text-gray-800 text-xs placeholder:text-[9px] pr-8  font--[600] lg:rounded-lg lg:placeholder:text-sm xl:placeholder:text-lg xl:text-lg  lg:pl-3 lg:text-sm lg:h-10 lg:w-[20rem] w-[6rem] sm:w-[15rem] xl:w-[30rem] xl:pl-4 xl:h-18 xl:rounded-xl border-none"
              />
              <div className=" h-full shadow-inner rounded-br-xl -ml-2">
                <SearchIcon className="!text-xs sm:!text-base xl:!text-3xl xl:!text-gray-500 !text-gray-500 lg:!text-lg" />
              </div>
            </div>
          </div>
            </div>
            <div className="flex mt-2"><SubHeader /></div>
         </div>
  );
}

export default Header;
