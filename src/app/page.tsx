import ScholarshipsSection from "@/components/Scrollership/ScholarshipSection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";


export default function Home() {
  return (
    <div className="">
      Study abroad and travel website
      <UniversitiesSection />
      <ScholarshipsSection/>
    <TopTravelPackages/>
    </div>
  );
}
