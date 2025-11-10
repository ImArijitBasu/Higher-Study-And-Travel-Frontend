"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AiOutlineDoubleRight, AiFillStar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const travelPackages = [
  {
    id: 1,
    title: "Rome Historical Journey",
    location: "Italy",
    image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/ancient-rome-hero?_a=BAVAZGID0",
    rating: 4.9,
    reviews: 1247,
    price: "$1,299",
    days: "7 Days",
    featured: true
  },
  {
    id: 2,
    title: "Kyoto Temple Tour",
    location: "Japan",
    image: "https://www.hertz.com/content/dam/hertz/global/blog-articles/planning-a-trip/kyoto-japan/kyoto-header.jpg",
    rating: 4.8,
    reviews: 892,
    price: "$1,099",
    days: "6 Days",
    featured: false
  },
  {
    id: 3,
    title: "Egypt Pyramids Adventure",
    location: "Egypt",
    image: "https://egyptescapes.com/wp-content/uploads/2022/12/egypt-adventures.jpg",
    rating: 4.7,
    reviews: 1563,
    price: "$899",
    days: "5 Days",
    featured: true
  },
  {
    id: 4,
    title: "Machu Picchu Trek",
    location: "Peru",
    image: "https://rezkit-tour-images.b-cdn.net/01h7ywwd7at70t98wdj69emng5/images/01H8Y65RZZBDRHYNE92FQK8FHF.jpg?width=1920&height=700&crop=2096%2C764%2C19%2C556",
    rating: 4.9,
    reviews: 734,
    price: "$1,499",
    days: "8 Days",
    featured: false
  },
];

export default function TopTravelPackages() {
  return (
    <section className="py-6 px-4 md:px-8 container mx-auto">
      {/* Updated Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Curated Travel Experiences
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Handpicked destinations for unforgettable journeys and lasting memories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {travelPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 group cursor-pointer transform hover:-translate-y-2"
          >
            <CardContent className="p-0 relative rounded-2xl">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <AiFillStar className="text-amber-400" />
                  <span className="font-semibold text-gray-900">{pkg.rating}</span>
                  <span className="text-gray-600 text-sm">({pkg.reviews})</span>
                </div>

                {/* Title & Location Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center text-white/90">
                    <IoLocationOutline className="mr-1" />
                    <span className="text-sm font-medium">{pkg.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-b-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 text-sm ml-1">/person</span>
                  </div>
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.days}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Package
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Updated Button */}
      <div className="text-center flex justify-center mt-12">
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-center text-white font-semibold px-10 py-7 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl group text-lg">
          <Link href="u/travel">
            Discover All Destinations
          </Link>
        </Button>
      </div>
    </section>
  );
}
