import MainBanner from "@/components/Banner/MainBanner";
import BlogCard from "@/components/Blogs/BlogCard";
import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import AboutStudy from "@/components/ui/AboutStudy";
import ExtraCard from "@/components/ExtraCard/ExtraCard";
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
      <ExtraCard></ExtraCard>
    </div>
  );
}
