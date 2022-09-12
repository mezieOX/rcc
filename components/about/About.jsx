import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="flex items-center max-w-[90rem] mx-auto relative z-40">
      <div className="relative sm:h-[400px] lg:h-[600px] h-[200px] xl:h-[800px] w-1/3 -mt-3 hover:scale-105 duration-500 ease-in">
        <Image src="/images/history.jpg" layout="fill" />
          </div>
          <div className="relative sm:h-[400px] lg:h-[600px] h-[200px] xl:h-[800px] w-1/3 -mt-3 hover:scale-105 duration-500 ease-in ">
        <Image src="/images/projectsA.jpg" layout="fill" />
          </div>
          <div className="relative sm:h-[400px] lg:h-[600px] h-[200px] xl:h-[800px] w-1/3 -mt-3 hover:scale-105 duration-500 ease-in ">
        <Image src="/images/community.jpg" layout="fill" />
      </div>
    </div>
  );
}

export default About;
