"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Tab {
  id: "what" | "who" | "why";
  label: string;
}

interface ContentItem {
  title: string;
  text: string[];
  image: string;
  link: string;
}

const AboutStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"what" | "who" | "why">("what");

  const tabs: Tab[] = [
    { id: "what", label: "What Is Study Abroad?" },
    { id: "who", label: "Who Can Study Abroad?" },
    { id: "why", label: "Why Study Abroad?" },
  ];

  const content: Record<"what" | "who" | "why", ContentItem> = {
    what: {
      title: "WHAT IS STUDY ABROAD?",
      text: [
        "Studying abroad is more than just earning credits in a new country—it's a life-changing adventure that reshapes how you see the world and yourself.",
        "It’s about stepping outside your comfort zone, immersing yourself in new cultures, and experiencing different perspectives firsthand.",
        "Beyond academics, you’ll develop valuable life skills, expand your global network, and create unforgettable memories.",
      ],
      image:
        "https://scholarszone.com.bd/wp-content/uploads/2025/06/Study-Abroad-2025.jpg.webp",
      link: "HOW TO PICK A PROGRAM",
    },
    who: {
      title: "WHO CAN STUDY ABROAD?",
      text: [
        "Almost anyone with a passion for learning and adventure can study abroad!",
        "Whether you’re in high school, college, or university, there’s a program that fits your academic and personal goals.",
        "If you’re open-minded and eager to experience the world from a new perspective, studying abroad is for you!",
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHrYeNb3llXJQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691898107626?e=2147483647&v=beta&t=lXnJxTKOCPHdhVJajHNNyMN0RqkG2aNzbs0yiZCUEIg",
      link: "HOW TO APPLY FOR A PROGRAM",
    },
    why: {
      title: "WHY STUDY ABROAD?",
      text: [
        "Studying abroad opens doors to new opportunities—both personal and professional.",
        "You’ll gain independence, global awareness, and a competitive edge that employers value highly.",
        "It’s a journey that transforms your education and your future.",
      ],
      image:
        "https://cdn.prod.website-files.com/5e6bef9160e290b99b7644b5/6516aeb88a1b8cf8e3b1047c_1%20(1)%20(1).webp",
      link: "BENEFITS OF STUDYING ABROAD",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-4 container">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-yellow-300 pb-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 font-semibold transition-colors ${
              activeTab === tab.id
                ? "text-yellow-600 border-b-4 border-yellow-400"
                : "text-gray-700 hover:text-yellow-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content[activeTab].title}
          </h2>
          {content[activeTab].text.map((para, i) => (
            <p key={i} className="text-gray-700 mb-4 leading-relaxed">
              {para}
            </p>
          ))}
          <p className="text-yellow-600 mt-4 font-semibold cursor-pointer hover:underline">
            {content[activeTab].link}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutStudy;
