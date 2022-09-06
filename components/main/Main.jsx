import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Main() {
  return (
    <div className="h-[100%]">
      <Carousel interval={500} showStatus={false} infiniteLoop={true} showArrows={true}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
            src="/images/photo-1606443410339-4046fad7a16a.avif"
            layout="fill"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
          <Image
            src="/images/istockphoto-1408224396-170667a.jpg"
            layout="fill"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
        <Image
            src="/images/photo-1642325017820-d081feea1969.avif"
            layout="fill"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
          <Image
            src="/images/1226267-middle.png"
            layout="fill"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Main;
