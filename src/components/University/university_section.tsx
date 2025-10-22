import { AiOutlineDoubleRight } from "react-icons/ai";
import { UniversityCard } from "./universityCard";



export function UniversitiesSection() {
    const universities = [
        {
            id: 1,
            universityName: "Harvard University",
            programType: "Study Abroad At",
            availableSemesters: "FALL SEMESTER, SPRING SEMESTER",
            price: "SEMESTER-$9,995",
            featured: true,
            availablePrograms: "NEW All Available Programs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhQAfS8jroT_twTwTYeE8_e5GHTTFVI2-4w&s",
        },
        {
            id: 2,
            universityName: "Stanford University",
            programType: "Study Abroad At",
            availableSemesters: "FALL SEMESTER, SPRING SEMESTER",
            price: "SEMESTER-$10,500",
            featured: false,
            availablePrograms: "NEW All Available Programs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhQAfS8jroT_twTwTYeE8_e5GHTTFVI2-4w&s"
        },
        {
            id: 3,
            universityName: "MIT",
            programType: "Study Abroad At",
            availableSemesters: "FALL SEMESTER, SUMMER SEMESTER",
            price: "SEMESTER-$9,800",
            featured: false,
            availablePrograms: "NEW All Available Programs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhQAfS8jroT_twTwTYeE8_e5GHTTFVI2-4w&s"
        },
        {
            id: 4,
            universityName: "MIT",
            programType: "Study Abroad At",
            availableSemesters: "FALL SEMESTER, SUMMER SEMESTER",
            price: "SEMESTER-$9,800",
            featured: false,
            availablePrograms: "NEW All Available Programs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhQAfS8jroT_twTwTYeE8_e5GHTTFVI2-4w&s"
        }
    ];


    return (
        <section className="w-full py-12 ">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className=" mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured University
                    </h2>

                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                    {universities.map((university) => (
                        <UniversityCard
                            key={university.id}
                            universityName={university.universityName}
                            programType={university.programType}
                            availableSemesters={university.availableSemesters}
                            price={university.price}
                            featured={university.featured}
                            availablePrograms={university.availablePrograms}
                            image={university.image}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-[#87E0FE] hover:bg-[#3396D3]  font-semibold py-3 px-8 rounded-3xl transition-colors duration-300 flex items-center gap-2 mx-auto">
                        View All Universities
                        <AiOutlineDoubleRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}