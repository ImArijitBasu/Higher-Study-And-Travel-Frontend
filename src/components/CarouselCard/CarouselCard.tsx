"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Story {
  id: number;
  imageUrl: string;
  title: string;
}

const storiesData: Story[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", title: "Bali, Indonesia" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", title: "Paris, France" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", title: "Swiss Alps, Switzerland" },
  { id: 4, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4sX87VY9hnQGyebt2t0aYuu9bpKDhhokOw&s", title: "Kyoto, Japan" },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", title: "Sahara Desert, Morocco" },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", title: "Santorini, Greece" },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86", title: "Patagonia, Chile" },
  { id: 8, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxRqXXqmFW2JKAa_rPiz1ZC5w_uC-rZNFwQ&s", title: "Dubai, UAE" },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Cappadocia, Turkey" },
];

const CarouselCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-16 container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Explore Our <span className="text-blue-500">Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Discover breathtaking destinations from around the world. Scroll through our curated gallery of top travel spots.
        </p>
      </div>

      {/* Carousel */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0px", `-${slideWidth}px`] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
          }}
        >
          {[...storiesData, ...storiesData].map((story) => (
            <motion.div
              key={story.id + Math.random()}
              className="flex-shrink-0 w-72 h-96 mr-6 relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={story.imageUrl}
                alt={story.title}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg">{story.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselCards;
