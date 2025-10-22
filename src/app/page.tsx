import FooterSection from "@/components/Footer_Section/FooterSection";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";

import ScholarshipsSection from "@/components/Scrollership/shcrollershipsection";
import TopTravelPackages from "@/components/TravelPackages/TopTravelPackages";
import { UniversitiesSection } from "@/components/University/university_section";
import WorkSection from "@/components/Work_Section/Work _Section";



export default function Home() {
  return (
    <div className="">
      Study abroad and travel website
      <UniversitiesSection />
      <ScholarshipsSection/>
      <TopTravelPackages/>
      <WorkSection/>
      <JoinCommunity/>
      <FooterSection/>

    </div>
  );
}
