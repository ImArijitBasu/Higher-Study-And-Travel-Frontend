import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const CarouselSlider = () => {
  const images = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ];

  return (
    <div className="w-full xl:w-1/2 h-[500px] ">
      <Carousel indicators={false}>
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-full">
            <Image
              src={src}
              alt={`carousel-${idx}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
