import { ArrowRight, BarChart2, Book, Gamepad2, Star, Trophy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { View } from '../types';

interface HomeProps {
  onNavigate: (view: View) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [animatedPoints, setAnimatedPoints] = useState(0);

  useEffect(() => {
    // Animate points up to 12450
    const target = 12450;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedPoints(target);
        clearInterval(timer);
      } else {
        setAnimatedPoints(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 gap-16">
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2 text-purple-600 bg-purple-100 px-4 py-2 rounded-full w-fit border-2 border-purple-200">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-pixel text-[10px] uppercase tracking-wider mt-1">Level Up Your Skills</span>
          </div>
          
          <h1 className="font-pixel text-4xl lg:text-5xl leading-tight text-slate-900 drop-shadow-sm">
            Track. <span className="text-purple-600">Play.</span><br />
            Climb the Leaderboard.
          </h1>
          
          <p className="text-lg text-slate-700 max-w-xl font-sans">
            Join the Google Arcade and power up your cloud knowledge. Complete labs, earn badges, and compete with developers worldwide for exclusive prizes.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="bg-purple-600 text-white font-pixel text-xs px-8 py-4 rounded-none pixel-border hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('leaderboard')}
              className="bg-white text-purple-600 font-pixel text-xs px-8 py-4 rounded-none pixel-border hover:bg-purple-50 transition-colors"
            >
              View Leaderboard
            </button>
          </div>
        </div>

        {/* Arcade Cabinet Illustration (CSS/Icon composition) */}
        <div className="flex-1 relative w-full max-w-md aspect-square flex items-center justify-center">
          {/* Decorative Clouds & Skyline */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute bottom-0 w-full h-32 bg-repeat-x flex items-end justify-between px-4">
                {/* Minimal CSS Skyline */}
                <div className="w-8 h-24 bg-purple-900 mx-1"></div>
                <div className="w-12 h-32 bg-purple-900 mx-1"></div>
                <div className="w-10 h-16 bg-purple-900 mx-1"></div>
                <div className="w-16 h-28 bg-purple-900 mx-1"></div>
                <div className="w-10 h-20 bg-purple-900 mx-1"></div>
             </div>
          </div>
          
          {/* Main Cabinet */}
          <div className="relative z-10 w-64 h-80 bg-indigo-300 pixel-border-lg rounded-t-lg flex flex-col items-center pt-4 pb-2 shadow-2xl border-4 border-indigo-400">
            {/* Marquee */}
            <div className="w-56 h-12 bg-white pixel-border flex items-center justify-center mb-4">
               <span className="font-pixel text-sm text-pink-500 tracking-widest drop-shadow-sm">ARCADE</span>
            </div>
            
            {/* Screen Area */}
            <div className="w-56 h-40 bg-slate-900 pixel-border rounded-sm relative flex items-center justify-center overflow-hidden border-4 border-slate-700">
               {/* Screen Glare */}
               <div className="absolute top-0 right-0 w-full h-full bg-white opacity-5 transform rotate-45 translate-x-12 -translate-y-4"></div>
               {/* Google G (CSS) */}
               <div className="flex font-sans font-bold text-6xl tracking-tighter shadow-sm mix-blend-screen opacity-90">
                 <span className="text-google-g1 drop-shadow-[0_0_8px_rgba(66,133,244,0.8)]">G</span>
               </div>
            </div>

            {/* Controls */}
            <div className="w-full mt-4 flex items-center justify-center gap-6 px-4">
              {/* Joystick */}
              <div className="relative">
                <div className="w-4 h-8 bg-slate-400 mx-auto"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full pixel-border absolute -top-4 -left-2"></div>
              </div>
              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2 transform rotate-12">
                <div className="w-6 h-6 rounded-full bg-blue-500 pixel-border"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 pixel-border"></div>
                <div className="w-6 h-6 rounded-full bg-green-500 pixel-border"></div>
                <div className="w-6 h-6 rounded-full bg-red-500 pixel-border"></div>
              </div>
            </div>
            
            {/* Coin Slot */}
            <div className="mt-4 w-12 h-16 bg-slate-800 pixel-border flex justify-center pt-2">
              <div className="w-2 h-6 bg-yellow-400/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 pixel-border rounded-lg animate-bounce z-20 flex items-center gap-2">
            <span className="font-pixel text-xs text-slate-800">+50 Points!</span>
            <div className="w-4 h-4 bg-yellow-400 rounded-full pixel-border"></div>
          </div>
          
          {/* Question Block */}
          <div className="absolute bottom-16 right-4 w-12 h-12 bg-yellow-400 pixel-border flex items-center justify-center z-20 shadow-lg">
             <span className="font-pixel text-white text-xl text-shadow">?</span>
          </div>
          
          {/* Ghosts */}
          <div className="absolute bottom-4 left-8 w-10 h-10 bg-blue-500 pixel-border rounded-t-full flex items-center justify-center z-20">
             <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2"><div className="w-1 h-1 bg-blue-900 absolute right-0"></div></div>
             <div className="w-2 h-2 bg-white rounded-full absolute top-2 right-2"><div className="w-1 h-1 bg-blue-900 absolute right-0"></div></div>
          </div>
          
          <div className="absolute bottom-4 right-16 w-8 h-8 bg-pink-500 pixel-border rounded-t-full flex items-center justify-center z-20">
             <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2 left-1.5"><div className="w-0.5 h-0.5 bg-blue-900 absolute right-0"></div></div>
             <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2 right-1.5"><div className="w-0.5 h-0.5 bg-blue-900 absolute right-0"></div></div>
          </div>
        </div>
      </div>

      {/* Feature Row */}
      <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 pixel-border shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors" onClick={() => onNavigate('dashboard')}>
            <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-pixel text-[10px] mb-2 uppercase text-slate-800">Track Progress</h3>
              <p className="text-sm text-slate-600 font-sans">Monitor your points and badges in real-time.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors" onClick={() => onNavigate('leaderboard')}>
            <div className="p-3 bg-green-100 rounded-lg text-green-600">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-pixel text-[10px] mb-2 uppercase text-slate-800">Climb Leaderboards</h3>
              <p className="text-sm text-slate-600 font-sans">See how you rank against other players.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors" onClick={() => onNavigate('facilitator')}>
            <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-pixel text-[10px] mb-2 uppercase text-slate-800">Facilitator Tools</h3>
              <p className="text-sm text-slate-600 font-sans">Manage participants and verify points.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors" onClick={() => onNavigate('resources')}>
            <div className="p-3 bg-pink-100 rounded-lg text-pink-600">
              <Book className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-pixel text-[10px] mb-2 uppercase text-slate-800">Helpful Resources</h3>
              <p className="text-sm text-slate-600 font-sans">Guides and FAQs to boost your score.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Counter */}
      <div className="w-full relative mt-16 flex justify-center">
        {/* Pixel Brick Platform (CSS) */}
        <div className="absolute bottom-0 w-full max-w-4xl h-16 bg-[#c84c0c] flex overflow-hidden border-t-4 border-black">
           {/* Simulate bricks */}
           <div className="w-full h-full opacity-30" style={{ backgroundImage: 'linear-gradient(90deg, transparent 48px, #000 48px, #000 50px), linear-gradient(0deg, transparent 24px, #000 24px, #000 26px)', backgroundSize: '50px 26px' }}></div>
        </div>
        
        {/* Floating Card */}
        <div className="relative z-10 bg-white pixel-border px-8 py-6 rounded-2xl flex flex-col items-center gap-2 transform -translate-y-8 animate-pulse shadow-2xl">
          <Star className="w-8 h-8 text-yellow-400 fill-current drop-shadow-md mb-2" />
          <h2 className="font-pixel text-xs text-slate-500 uppercase tracking-widest">Total Arcade Points</h2>
          <div className="font-pixel text-5xl text-purple-600 tracking-tighter">
            {animatedPoints.toLocaleString()}
          </div>
        </div>
      </div>

    </div>
  );
}
