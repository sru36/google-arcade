import React from 'react';
import { UserStats } from '../types';
import { Activity, Award, Target, Zap } from 'lucide-react';

const MOCK_STATS: UserStats = {
  points: 12450,
  level: 4,
  nextMilestone: 15000,
  recentActivity: [
    { id: '1', description: 'Completed "Cloud Run Fundamentals" lab', points: 50, date: '2026-07-13' },
    { id: '2', description: 'Earned "Serverless Explorer" badge', points: 150, date: '2026-07-12' },
    { id: '3', description: 'Completed "BigQuery ML" quest', points: 300, date: '2026-07-10' },
    { id: '4', description: 'Daily Login Bonus', points: 10, date: '2026-07-09' },
  ]
};

export default function Dashboard() {
  const progressPercent = (MOCK_STATS.points / MOCK_STATS.nextMilestone) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="font-pixel text-2xl text-slate-900 mb-8 flex items-center gap-4">
        <Zap className="text-yellow-500 w-8 h-8 fill-current" />
        Player Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Points Card */}
        <div className="bg-white p-6 pixel-border flex flex-col items-center justify-center text-center">
          <p className="font-pixel text-[10px] text-slate-500 mb-4 uppercase">Total Points</p>
          <p className="font-pixel text-4xl text-purple-600">{MOCK_STATS.points.toLocaleString()}</p>
        </div>

        {/* Level Card */}
        <div className="bg-purple-600 text-white p-6 pixel-border flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-20 transform translate-x-4 -translate-y-4">
            <Award className="w-32 h-32" />
          </div>
          <p className="font-pixel text-[10px] text-purple-200 mb-4 uppercase relative z-10">Current Level</p>
          <p className="font-pixel text-4xl relative z-10">Tier {MOCK_STATS.level}</p>
        </div>

        {/* Next Milestone Card */}
        <div className="bg-white p-6 pixel-border flex flex-col justify-center">
          <div className="flex justify-between items-end mb-4">
            <p className="font-pixel text-[10px] text-slate-500 uppercase">Next Milestone</p>
            <p className="font-pixel text-sm text-slate-900">{MOCK_STATS.nextMilestone.toLocaleString()}</p>
          </div>
          
          <div className="w-full bg-slate-200 h-6 pixel-border p-1">
            <div 
              className="bg-green-500 h-full transition-all duration-1000 ease-out"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-sans text-right">
            {(MOCK_STATS.nextMilestone - MOCK_STATS.points).toLocaleString()} pts to go
          </p>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white p-6 md:p-8 pixel-border">
        <h3 className="font-pixel text-sm text-slate-800 mb-6 border-b-2 border-slate-100 pb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-slate-400" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          {MOCK_STATS.recentActivity.map((act) => (
            <div key={act.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border-2 border-slate-200 rounded-sm hover:border-purple-300 hover:bg-purple-50 transition-colors">
              <div>
                <p className="font-sans font-medium text-slate-800">{act.description}</p>
                <p className="font-sans text-xs text-slate-500 mt-1">{act.date}</p>
              </div>
              <div className="mt-2 sm:mt-0 font-pixel text-sm text-green-600 bg-green-100 px-3 py-1 border-2 border-green-200 self-start sm:self-auto">
                +{act.points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
