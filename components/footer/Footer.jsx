import React from 'react';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <div className="px-2 md:px-8 flex justify-center items-start md:items-center text-xs md:text-sm lg:text-xl font-[500] uppercase">
        <div className="w-20 sm:w-40 md:w-[15rem] lg:w-[30rem]">
          Copyright &copy; 2022 - living faith church worldwide international
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-center space-x-8 flex-wrap my-10 mx-auto w-80">
        <div>
          <WhatsAppIcon className="hover:!text-red-500 transition duration-200 ease-out !text-lg md:!text-xl cursor-pointer" />
        </div>
        <div>
          <InstagramIcon className="hover:!text-red-500 transition duration-200 ease-out !text-lg md:!text-xl cursor-pointer" />
        </div>
        <div>
          <LocalPhoneIcon className="hover:!text-red-500 transition duration-200 ease-out !text-xl md:!text-xl cursor-pointer" />
        </div>
      </div>
      <div className="fixed bottom-2 md:bottom-4 md:right-8  lg:bottom-10 left-2 lg:left-10">
        <Link href="/">
          <a>
            <EmailIcon className="p-2 !text-[60px] !text-white shadow-lg md:!text-[70px] lg:!text-[90px]  rounded-full border border-red-500 cursor-pointer" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
