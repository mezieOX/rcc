import React from 'react';
import Image from 'next/image';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import WhatsappIcon from '@material-ui/icons/Whatsapp';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import SubHeader from './SubHeader';

function Header() {
  return (
      <div className="flex overflow-x-scroll px-2 py-2 items-center space-x-8 justify-between w-full scrollbar-hide">
          <div className="w-1/2">
          <div className="relative h-6 w-[6rem] xl:h-[10rem] xl:w-[2rem] shrink-0">
            <Image src="/images/logo.jpg" layout="fill" objectFit='cover' />
              </div>
              </div>
          <div className="flex space-x-3 xl:space-x-8 w-full items-center justify-end max-w-lg">
            <div className="flex space-x-2">
              <div>
                  <PhotoCameraIcon className="!text-gray-500 !text-xs" />
              </div>
              <div>
                  <WhatsappIcon className="!text-gray-500 !text-xs" />
              </div>
              <div>
                  <InstagramIcon  className="!text-gray-500 !text-xs" />
              </div>
            </div>
            <div className="flex items-center pr-2 border rounded bg-white focus:shadow-blue-100 focus:shadow-lg">
              <input
                type="text"
                placeholder="<Search>"
                className="outline-none xl:border-[1px] h-full xl:h-9 placeholder:text-gray-600 pl-1 rounded text-gray-800 text-xs xl:placeholder:text-lg placeholder:text-[9px] pr-8  font--[600] w-[6rem]"
              />
              <div className=" h-full shadow-inner rounded-br-xl -ml-2">
                <SearchIcon className="!text-xs xl:!text-3xl xl:!text-white !text-black" />
              </div>
            </div>
           </div>
         </div>
  );
}

export default Header;
