export type View = 'home' | 'dashboard' | 'leaderboard' | 'facilitator' | 'resources';

export interface UserStats {
  points: number;
  level: number;
  nextMilestone: number;
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  description: string;
  points: number;
  date: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  tier: string;
  isCurrentUser?: boolean;
}

export interface Participant {
  id: string;
  name: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  email: string;
}
