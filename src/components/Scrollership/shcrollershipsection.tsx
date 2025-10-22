
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScholarshipCard } from "./shcrollershipCard";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function ScholarshipsSection() {
  const scholarships = [
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-8">Scholarships</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scholarships.map((item, idx) => (
          <ScholarshipCard key={idx} {...item} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="bg-[#56c4f8] hover:bg-[#47b0e5] text-black  rounded-full px-6">
          Explore More  <AiOutlineDoubleRight size={20} />
        </Button>
      </div>
    </section>
  );
}
