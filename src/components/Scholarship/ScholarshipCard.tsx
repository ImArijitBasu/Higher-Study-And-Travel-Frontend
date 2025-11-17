"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, DollarSign } from "lucide-react";
import Image from "next/image";
import { ScholarshipCardProps } from "@/types";



export function ScholarshipCard({
  title,
  country,
  degree,
  deadline,
  amount,
  flag,

}: ScholarshipCardProps) {
  return (
    <Card className="bg-[#e9f8ff] rounded-2xl shadow-sm hover:shadow-md transition-all">
      <CardHeader className="flex  items-center gap-3">
        <div className="w-16 h-16 bg-[#56c4f8] rounded-full">
          {/* <Image src={image} alt={title} width={24} height={16} className="rounded-sm" /> */}
        </div>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Image src={flag} alt={country} width={24} height={16} className="" />
          <span>{country}</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          <span>{degree}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>Deadline: {deadline}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign size={16} />
          <span>Amount: {amount}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-[#56c4f8] hover:bg-[#47b0e5] text-black w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
