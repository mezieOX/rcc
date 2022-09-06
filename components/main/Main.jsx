import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Main() {
  return (
    <div className="h-[100%]">
      <Carousel interval={500} showStatus={false} infiniteLoop={true} showArrows={true} showThumb={false}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
              <Image
            src="/images/istockphoto-522403165-612x612.jpg"
            layout="fill"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
          <Image
            src="/images/istockphoto-1011940756-612x612.jpg"
            layout="fill"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
        <Image
            src="/images/istockphoto-1036529282-612x612.jpg"
            layout="fill"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] ">
          <Image
            src="/images/istockphoto-1165467953-612x612.jpg"
            layout="fill"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Main;
