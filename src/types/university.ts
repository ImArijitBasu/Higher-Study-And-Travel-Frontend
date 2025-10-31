export interface University {
  id: string;
  name: string;
  country: string;
  courses: string[];
}
 
export interface UniversityCardProps {
  id:number;
  universityName: string;
  programName: string;
  location: string;
  worldRank: string;
  degree: string;
  intakeDate: string;
  entryScore: string;
  tuitionFee: string;
  image?: string;
  featured?: boolean;
}

//http://localhost:3000/u/universities/university_Name/degree_Name