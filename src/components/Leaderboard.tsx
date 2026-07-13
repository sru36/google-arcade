import React, { useState } from 'react';
import { LeaderboardEntry } from '../types';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { id: '1', name: 'CloudMaster99', points: 45200, tier: 'Diamond' },
  { id: '2', name: 'ServerlessNinja', points: 42100, tier: 'Platinum' },
  { id: '3', name: 'DataWizard', points: 38500, tier: 'Platinum' },
  { id: '4', name: 'You (Player_One)', points: 12450, tier: 'Gold', isCurrentUser: true },
  { id: '5', name: 'CodeRunner', points: 11200, tier: 'Gold' },
  { id: '6', name: 'KubernetesKid', points: 9800, tier: 'Silver' },
  { id: '7', name: 'GCPExplorer', points: 8500, tier: 'Silver' },
  { id: '8', name: 'AI_Enthusiast', points: 7200, tier: 'Bronze' },
];

export default function Leaderboard() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedData = [...MOCK_LEADERBOARD].sort((a, b) => {
    return sortOrder === 'desc' ? b.points - a.points : a.points - b.points;
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="font-pixel text-2xl text-slate-900 flex items-center gap-4">
          <Trophy className="text-yellow-500 w-8 h-8 fill-current" />
          Global Leaderboard
        </h2>
        <button 
          onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
          className="bg-white px-4 py-2 pixel-border font-pixel text-[10px] text-slate-700 hover:bg-slate-50 flex items-center gap-2"
        >
          Sort by Points
          {sortOrder === 'desc' ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      <div className="bg-white pixel-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-pixel text-[10px] uppercase">
                <th className="p-4 border-b-4 border-slate-700 w-16 text-center">Rank</th>
                <th className="p-4 border-b-4 border-slate-700">Player</th>
                <th className="p-4 border-b-4 border-slate-700">Tier</th>
                <th className="p-4 border-b-4 border-slate-700 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((entry, index) => {
                const rank = sortOrder === 'desc' ? index + 1 : sortedData.length - index;
                const isTop3 = sortOrder === 'desc' && rank <= 3;
                
                return (
                  <tr 
                    key={entry.id} 
                    className={`
                      border-b-2 border-slate-100 font-sans transition-colors
                      ${entry.isCurrentUser ? 'bg-purple-50 border-purple-200' : 'hover:bg-slate-50'}
                    `}
                  >
                    <td className="p-4 text-center">
                      {isTop3 ? (
                        <div className={`
                          w-8 h-8 mx-auto flex items-center justify-center font-pixel text-xs text-white pixel-border rounded-full
                          ${rank === 1 ? 'bg-yellow-400' : rank === 2 ? 'bg-slate-300' : 'bg-amber-600'}
                        `}>
                          {rank}
                        </div>
                      ) : (
                        <span className="font-pixel text-xs text-slate-400">{rank}</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`font-semibold ${entry.isCurrentUser ? 'text-purple-700' : 'text-slate-800'}`}>
                        {entry.name}
                      </span>
                      {entry.isCurrentUser && (
                        <span className="ml-2 inline-block font-pixel text-[8px] bg-purple-600 text-white px-2 py-1 uppercase rounded-sm">You</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`
                        font-pixel text-[10px] px-2 py-1 rounded-sm border-2
                        ${entry.tier === 'Diamond' ? 'bg-cyan-50 border-cyan-200 text-cyan-700' : ''}
                        ${entry.tier === 'Platinum' ? 'bg-slate-100 border-slate-300 text-slate-700' : ''}
                        ${entry.tier === 'Gold' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : ''}
                        ${entry.tier === 'Silver' ? 'bg-gray-100 border-gray-300 text-gray-600' : ''}
                        ${entry.tier === 'Bronze' ? 'bg-orange-50 border-orange-200 text-orange-800' : ''}
                      `}>
                        {entry.tier}
                      </span>
                    </td>
                    <td className="p-4 text-right font-pixel text-sm text-slate-700">
                      {entry.points.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
