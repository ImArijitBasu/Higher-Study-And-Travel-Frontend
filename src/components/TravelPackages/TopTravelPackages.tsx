"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AiOutlineDoubleRight } from "react-icons/ai";

const travelPackages = [
  {
    id: 1,
    title: "Grand Palace, Bangkok",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzHeZ9YsdC0EKMr_KlJN9Rt9JeuPOb1uU0g&s",
  },
  {
    id: 2,
    title: "Grand Palace, Bangkok",
     image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzHeZ9YsdC0EKMr_KlJN9Rt9JeuPOb1uU0g&s",
  },
  {
    id: 3,
    title: "Grand Palace, Bangkok",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzHeZ9YsdC0EKMr_KlJN9Rt9JeuPOb1uU0g&s",
  },
  {
    id: 4,
    title: "Grand Palace, Bangkok",
     image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzHeZ9YsdC0EKMr_KlJN9Rt9JeuPOb1uU0g&s",
  },
];

export default function TopTravelPackages() {
  return (
    <section className="py-10 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Top Travel Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {travelPackages.map((pkg) => (
          <Card key={pkg.id} className="rounded-2xl shadow-sm overflow-hidden">
            <CardContent className="rounded-t-xl">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="bg-[#e6f8ff] py-3 text-center">
                <h3 className="font-semibold text-gray-800">
                  {pkg.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center flex justify-center mt-8">
        <Button className="bg-sky-400 hover:bg-sky-500 text-black rounded-full">
          Explore Travel Packages  <AiOutlineDoubleRight size={20} />
        </Button>
      </div>
    </section>
  );
}
