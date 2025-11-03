"use client";
import React from "react";
import FilterSection from "./triFilter";
import DestinationCard from "./destinationcard";

const DestinationsPage = () => {
  const destinations = [
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
    {
      image: "/Travel.jpg",
      title: "London Study Tour",
      price: "$1,500",
      days: "7",
      rating: 4.5,
    },
  ];

  return (
<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
  {/* Left: Filter Section */}
  <div className="w-1/3  p-4 box-border">
    <FilterSection />
  </div>

  {/* Right: Cards */}
  <div className="w-full md:w-2/3  p-4 box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
    {destinations.map((dest, index) => (
      <DestinationCard key={index} {...dest} />
    ))}
  </div>
</div>

  );
};

export default DestinationsPage;
