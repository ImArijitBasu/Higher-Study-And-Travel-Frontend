export interface Application {
  id: string;
  userId: string;
  universityId: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}
