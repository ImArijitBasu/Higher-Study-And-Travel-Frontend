import FooterSection from "@/components/Footer_Section/FooterSection";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";

import ScholarshipsSection from "@/components/Scrollership/shcrollershipsection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";
import WorkSection from "@/components/Work_Section/Work _Section";

import MainBanner from "@/components/Banner/MainBanner";
import BlogCard from "@/components/Blogs/BlogCard";
import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import AboutStudy from "@/components/ui/AboutStudy";
import StudyAbroadWork from "@/components/ui/StudyAbroadWork";
import { UniversitiesSection } from "@/components/University/university_section";


export default function Home() {
  return (
    <div className="">
      <MainBanner/>
      <UniversitiesSection />
      <ScholarshipsSection/>
      <TopTravelPackages/>
      <BlogCard></BlogCard>
      <AboutStudy></AboutStudy>
      <StudyAbroadWork></StudyAbroadWork>
    
      <WorkSection/>
      <JoinCommunity/>
      <FooterSection/>

    <TopTravelPackages/>
    <BlogCard></BlogCard>
    
    </div>
  );
}
