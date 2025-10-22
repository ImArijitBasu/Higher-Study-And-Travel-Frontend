import MainBanner from "@/components/Banner/MainBanner";
import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";


export default function Home() {
  return (
    <div className="">
      <MainBanner/>
      <UniversitiesSection />
      <ScholarshipsSection/>
    <TopTravelPackages/>
    </div>
  );
}
