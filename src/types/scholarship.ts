export interface Scholarship {
  id: string;
  name: string;
  universityId: string;
  amount: number;
  deadline: string;
}
export interface ScholarshipCardProps {
  title: string;
  country: string;
  degree: string;
  deadline: string;
  amount: string;
  flag: string;
}
