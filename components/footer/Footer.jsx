import React from 'react';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div>
      <div className="px-2 md:px-8 flex justify-center items-start md:items-center text-xs md:text-sm lg:text-xl font-[500] uppercase">
        <div className="w-20 sm:w-40 md:w-[15rem] lg:w-[30rem]">
          Copyright &copy; 2022 - living faith church worldwide international
        </div>
        <div></div>
          </div>
          <div className='flex items-center justify-center space-x-8 flex-wrap my-10 mx-auto w-80'>
              <div><WhatsAppIcon className="hover:!text-red-500 transition duration-200 ease-out !text-lg md:!text-xl" /></div>
              <div><InstagramIcon className="hover:!text-red-500 transition duration-200 ease-out !text-lg md:!text-xl" /></div>
              <div><LocalPhoneIcon className="hover:!text-red-500 transition duration-200 ease-out !text-xl md:!text-xl" /></div>
          </div>
    </div>
  );
}

export default Footer;
