

import { ScholarshipCard } from "./ScholarshipCard";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";

export default function ScholarshipsSection({ limit }) {
  const scholarships = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCB7KCsz0-mHk8drp4BRbZTWbhU9dW7XEA&s',
      title: "Fulbright Scholarships",
      country: "United States",
      degree: "Masters",
      deadline: "Dec 01",
      amount: "$20,000",
      flag: "https://flagcdn.com/w20/us.png",
    },
  ];
  const displayedScholarships = limit
    ? scholarships.slice(0, limit)
    : scholarships;




  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Scholarships</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedScholarships.map((uni) => (
          <ScholarshipCard key={uni.id} {...uni} />
        ))}
      </div>

    <div className="  flex justify-center mt-10 ">
          {limit && (
            <Link
              href="u/scholarships"
              className="bg-[#56c4f8] w-44 flex justify-between hover:bg-[#47b0e5] text-black  rounded-full px-6 py-2 "
            >
              Expolar More <AiOutlineDoubleRight size={20}/>
            </Link>
          )}
        </div>
    </section>
  );
}
