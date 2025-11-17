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
  // isFeatured?: boolean;
  // description?: string;
  // website?: string;
  // highlights?: string[];
}

//http://localhost:3000/u/universities/university_Name/degree_Name