import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";
import MainBanner from "@/components/Banner/MainBanner";
import AboutStudy from "@/components/ui/AboutStudy";
import ExtraCard from "@/components/ExtraCard/ExtraCard";
import StudyAbroadWork from "@/components/ui/StudyAbroadWork";
import WorkSection from "@/components/Work_Section/Work _Section";
import CarouselCards from "@/components/CarouselCard/CarouselCard";

export default function Home() {
  return (
    <div>
      <MainBanner />
      {/* <UniversitiesSection /> */}
      <ScholarshipsSection />
      <TopTravelPackages />
      <CarouselCards />
      <AboutStudy />
      <StudyAbroadWork />
      <WorkSection />
      <ExtraCard/>
    </div>
  );
}
