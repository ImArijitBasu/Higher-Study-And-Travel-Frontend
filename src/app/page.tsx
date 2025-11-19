import ScholarshipsSection from "@/components/Scholarship/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";
import MainBanner from "@/components/Banner/MainBanner";
import AboutStudy from "@/components/ui/AboutStudy";
import ExtraCard from "@/components/ExtraCard/ExtraCard";
import StudyAbroadWork from "@/components/ui/StudyAbroadWork";
import WorkSection from "@/components/Work_Section/Work _Section";
import CarouselCards from "@/components/CarouselCard/CarouselCard";
import PartnersPage from "@/components/PartnerSection/Partner";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <UniversitiesSection  limit={6}/>
      <ScholarshipsSection limit={4}/>
      <TopTravelPackages />
      <CarouselCards />
      <WorkSection />
      <AboutStudy />
      <StudyAbroadWork />
      <ExtraCard/>
      <PartnersPage></PartnersPage>
    </div>
  );
}