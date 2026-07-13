import React, { useState } from 'react';
import { Participant } from '../types';
import { Gamepad2, Search, Check, X, Users } from 'lucide-react';

const INITIAL_PARTICIPANTS: Participant[] = [
  { id: 'p1', name: 'Alice Chen', email: 'alice@example.com', status: 'Pending' },
  { id: 'p2', name: 'Bob Smith', email: 'bob@example.com', status: 'Approved' },
  { id: 'p3', name: 'Charlie Davis', email: 'charlie@example.com', status: 'Pending' },
  { id: 'p4', name: 'Diana Prince', email: 'diana@example.com', status: 'Rejected' },
];

export default function Facilitator() {
  const [participants, setParticipants] = useState<Participant[]>(INITIAL_PARTICIPANTS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (id: string, newStatus: Participant['status']) => {
    setParticipants(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const filteredParticipants = participants.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="bg-slate-900 text-white p-6 md:p-8 pixel-border mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-pixel text-2xl mb-2 flex items-center gap-4">
            <Gamepad2 className="text-yellow-400 w-8 h-8" />
            Facilitator Console
          </h2>
          <p className="font-sans text-slate-300 max-w-xl">
            Manage your local Arcade cohort. Verify completions, approve new participants, and track group progress. (Demo Mode)
          </p>
        </div>
        <div className="bg-slate-800 p-4 border-2 border-slate-700 rounded-sm flex items-center gap-4 text-center">
          <div>
            <p className="font-pixel text-[10px] text-slate-400 uppercase mb-1">Total Cohort</p>
            <p className="font-pixel text-2xl text-purple-400">{participants.length}</p>
          </div>
          <Users className="w-8 h-8 text-slate-600" />
        </div>
      </div>

      <div className="bg-white p-6 pixel-border">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="font-pixel text-sm text-slate-800">Manage Participants</h3>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search participants..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-slate-300 font-sans focus:outline-none focus:border-purple-500 rounded-sm"
            />
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 font-pixel text-[10px] uppercase text-slate-600">
                <th className="p-3 border-b-2 border-slate-200">Name</th>
                <th className="p-3 border-b-2 border-slate-200">Email</th>
                <th className="p-3 border-b-2 border-slate-200">Status</th>
                <th className="p-3 border-b-2 border-slate-200 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredParticipants.map(p => (
                <tr key={p.id} className="border-b border-slate-100 font-sans hover:bg-slate-50">
                  <td className="p-3 font-medium text-slate-800">{p.name}</td>
                  <td className="p-3 text-slate-500">{p.email}</td>
                  <td className="p-3">
                    <span className={`
                      text-xs font-bold px-2 py-1 rounded-sm
                      ${p.status === 'Approved' ? 'bg-green-100 text-green-700' : ''}
                      ${p.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${p.status === 'Rejected' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {p.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleStatusChange(p.id, 'Approved')}
                        disabled={p.status === 'Approved'}
                        className="p-1.5 bg-green-100 text-green-600 hover:bg-green-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title="Approve"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleStatusChange(p.id, 'Rejected')}
                        disabled={p.status === 'Rejected'}
                        className="p-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title="Reject"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredParticipants.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500 font-sans">
                    No participants found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
