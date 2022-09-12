import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel() {
  return (
    <div className="h-40 sm:h-80 lg:h-[40rem] xl:h-[60rem] transition">
      <Carousel
        showIndicators={true}
        interval={5000}
        autoPlay={true}
        showArrows={true}
        infinitLoop={true}
        showStatus={false}
      >
        <div className="relative h-40 sm:h-80 lg:h-[40rem] xl:h-[60rem]">
          <Image
            src="/images/F0_1920_0616_102_january_main.jpg"
            layout="fill"
            objectFit='cover'
          />
          </div>
          
          <div className="relative h-40 sm:h-80 xl:h-[60rem] lg:h-[40rem]">
          <Image
            src="/images/F0_1920_0616_114_july_main.jpg"
            layout="fill"
            objectFit='cover'
          />
        </div>
        
           <div className="relative h-40 sm:h-80 xl:h-[60rem] lg:h-[40rem]">
          <Image
            src="/images/F0_1920_0616_rcc6(1).jpg"
            layout="fill"
            objectFit='cover'
            />
            </div>

             <div className="relative h-40 sm:h-80 xl:h-[60rem] lg:h-[40rem]">
          <Image
            src="/images/F0_1920_0616_pic3.jpg"
            layout="fill"
            objectFit='cover'
          />
        </div>
        
        <div className="relative h-40 sm:h-80 xl:h-[60rem] lg:h-[40rem]">
          <Image
            src="/images/F0_1920_0616_5.jpg"
            layout="fill"
            objectFit='cover'
          />
        </div>
        
        <div className="relative h-40 sm:h-80 xl:h-[60rem] lg:h-[40rem]">
          <Image
            src="/images/F0_1920_0616_1 (1).jpg"
            layout="fill"
            objectFit='cover'
          />
          </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
