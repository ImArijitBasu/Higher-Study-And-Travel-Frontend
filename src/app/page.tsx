import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";
import MainBanner from "@/components/Banner/MainBanner";
import BlogCard from "@/components/CarouselCard/CarouselCard";
import AboutStudy from "@/components/ui/AboutStudy";
import StudyAbroadWork from "@/components/ui/StudyAbroadWork";
import WorkSection from "@/components/Work_Section/Work _Section";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <UniversitiesSection />
      <ScholarshipsSection />
      <TopTravelPackages />
      <BlogCard />
      <AboutStudy />
      <StudyAbroadWork />
      <WorkSection />
    </div>
  );
}
