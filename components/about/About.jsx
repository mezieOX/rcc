import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="flex items-center xl:space-x-8 max-w-[90rem] mx-auto relative">
      <div className="relative h-[200px] xl:h-[800px] w-1/3 -mt-3 hover:scale-105 duration-500 ease-in ">
        <Image src="/images/history.jpg" layout="fill" />
          </div>
          <div className="relative h-[200px] xl:h-[800px] w-1/3 -mt-3 hover:scale-105 duration-500 ease-in ">
        <Image src="/images/projectsA.jpg" layout="fill" />
          </div>
          <div className="relative h-[200px] xl:h-[800px] w-1/3 -mt-3 hover:scale-105 duration-500 ease-in ">
        <Image src="/images/community.jpg" layout="fill" />
      </div>
    </div>
  );
}

export default About;
