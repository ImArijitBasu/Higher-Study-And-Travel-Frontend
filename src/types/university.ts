export interface University {
  id: string;
  name: string;
  country: string;
  courses: string[];
}
 
export interface UniversityCardProps {
  universityName: string;
  programType: string;
  availableSemesters: string;
  price: string;
  featured: boolean;
  availablePrograms: string;
  image?: string;
}
