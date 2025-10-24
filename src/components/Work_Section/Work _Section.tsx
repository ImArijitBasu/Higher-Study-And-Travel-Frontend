"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search className="w-12 h-12 text-blue-500" />,
    title: "Find Universities Or Travel Destination",
  },
  {
    id: 2,
    icon: <FileText className="w-12 h-12 text-green-500" />,
    title: "Upload Required Documents & Apply",
  },
  {
    id: 3,
    icon: <PlaneTakeoff className="w-12 h-12 text-cyan-500" />,
    title: "Embark On Your Journey",
  },
];

export default function WorkSection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-3xl font-semibold mb-10 text-gray-900">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <Card key={step.id} className="shadow-none border-none">
            <CardContent className="flex flex-col items-center space-y-3">
              {step.icon}
              <p className="text-gray-700 font-medium">{step.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
