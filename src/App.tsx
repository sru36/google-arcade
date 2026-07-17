import React, { useState, useEffect } from 'react';
import { Check, Copy, ExternalLink, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const CHECKPOINTS = [
  {
    id: 1,
    title: "Account Setup",
    subtitle: "Get a Google Account ready",
    bullets: [
      "Use a personal Google account — not one restricted by an organization",
      "This is the account you'll use for all Facilitator recruiting steps"
    ]
  },
  {
    id: 2,
    title: "Your Details",
    subtitle: "Note down your personal details",
    bullets: [
      "Full name",
      "Email address",
      "Phone number",
      "Country / region"
    ]
  },
  {
    id: 3,
    title: "Referral",
    subtitle: "Get your Facilitator Referral Code",
    bullets: [
      "Copy and paste it — don't type it manually",
      "You'll paste this exact code into the enrolment form later"
    ],
    copyText: "GCAF26-IN-EMZ-46U"
  },
  {
    id: 4,
    title: "Skills Boost",
    subtitle: "Create a Google Skills Boost account",
    bullets: [
      "Sign up or log in on the Google Skills Boost site",
      "Use the same email you're registering with"
    ],
    link: { url: "https://skills.google", label: "skills.google" }
  },
  {
    id: 5,
    title: "Skills Boost",
    subtitle: "Make your Skills Boost profile public",
    bullets: [
      "Open your Skills Boost profile settings",
      "Switch visibility to Public",
      "Copy your public profile link for later"
    ],
    link: { url: "https://skills.google/profile", label: "skills.google/profile" }
  },
  {
    id: 6,
    title: "Developer Profile",
    subtitle: "Create your Google Developer Profile",
    bullets: [
      "Sign up or log in with your Google account",
      "This is separate from your Skills Boost profile"
    ],
    link: { url: "https://developers.google.com/program", label: "developers.google.com/program" }
  },
  {
    id: 7,
    title: "Developer Profile",
    subtitle: "Make your Developer Profile public",
    bullets: [
      "Open your Developer Profile settings",
      "Switch visibility to Public"
    ],
    link: { url: "https://developers.google.com/u/me", label: "developers.google.com/u/me" }
  },
  {
    id: 8,
    title: "Developer Profile",
    subtitle: "Copy your Developer Profile URL",
    bullets: [
      "Grab the full public link to your profile",
      "You'll paste this directly into the enrolment form"
    ],
    multiCopy: ["g.dev/username", "developers.google.com/profile/u/username"]
  },
  {
    id: 9,
    title: "Inventory Check",
    subtitle: "Save everything in one place",
    bullets: [
      "Full name, email, phone, country",
      "Skills Boost profile link",
      "Developer Profile link",
      "Referral code"
    ]
  },
  {
    id: 10,
    title: "Final Boss",
    subtitle: "Submit the Enrolment Form",
    bullets: [
      "Fill the official form using everything you gathered above",
      "Google Sign-in is required to submit",
      "Submit before the deadline — no late entries"
    ]
  }
];

const QUICK_SCAN = [
  { id: 1, text: "Personal Google account ready" },
  { id: 2, text: "Full name, email, phone, country noted" },
  { id: 3, text: "Facilitator referral code saved" },
  { id: 4, text: "Google Skills Boost account created" },
  { id: 5, text: "Skills Boost profile set to Public" },
  { id: 6, text: "Google Developer Profile created" },
  { id: 7, text: "Developer Profile set to Public" },
  { id: 8, text: "Developer Profile URL copied" }
];

export default function App() {
  const [collected, setCollected] = useState<number[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [views, setViews] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem('pageViews') || '0', 10);
    const newViews = currentViews + 1;
    localStorage.setItem('pageViews', newViews.toString());
    setViews(newViews);
  }, []);

  const toggleCollect = (id: number) => {
    setCollected(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const progress = (collected.length / 10) * 100;

  return (
    <div className="min-h-screen pb-20 font-sans relative">
      
      {/* Top Right Overlay */}
      <div className="fixed top-4 right-4 z-50 pointer-events-none">
        <div className="bg-purple-100 text-purple-900 font-normal font-pixel text-[10px] md:text-xs px-3 py-2 pixel-border shadow-sm uppercase tracking-widest text-right max-w-[200px] md:max-w-none">
          Enrollment is first come first serve basis !
        </div>
      </div>


      {/* Animated Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden" style={{ background: 'linear-gradient(135deg,#fce8e6 0%,#f3e8fb 45%,#e6e0fa 100%)' }}>
        <div className="cloud c1"></div>
        <div className="cloud c2"></div>
        <div className="cloud c3"></div>
        <div className="cloud c4"></div>
        <div className="spark s1"></div>
        <div className="spark s2"></div>
        <div className="spark s3"></div>
      </div>
      
      {/* Header section */}
      <header className="min-h-[100svh] flex flex-col justify-center pt-16 pb-8 px-4 text-center max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg md:text-xl text-purple-600 mb-6 tracking-widest uppercase drop-shadow-sm">Registration Prerequisites Guide</h2>
        <h1 className="font-pixel text-5xl md:text-7xl text-slate-900 mb-8 leading-tight drop-shadow-md">
          ARCADE FACILITATOR<br/><span className="text-purple-600">PROGRAM 2026</span>
        </h1>
        <p className="text-slate-700 font-subtext text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Ten checkpoints stand between you and enrolment. Clear each level below, collect your credentials, then take on the final boss — the enrolment form itself.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
          <div className="bg-white pixel-border px-6 flex items-center gap-4 shadow-sm hover:-translate-y-1 transition-transform h-[80px] w-full max-w-[380px]">
            <Calendar className="text-purple-500 w-8 h-8 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Enrolment window closes</div>
              <div className="font-pixel text-sm text-slate-900 mt-1">13 - 20 JULY 2026</div>
            </div>
          </div>
          
          <a href="https://arcadecalc.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white pixel-border px-6 flex items-center justify-center gap-3 hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group h-[80px] w-full max-w-[380px] relative">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl">bar_chart_4_bars</span>
              <span className="font-pixel text-lg tracking-wider">Track on ArcadeCalc</span>
            </div>
            <ArrowRight className="w-6 h-6 absolute right-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </a>
        </div>

        <div className="mt-6 flex justify-center w-full px-4">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScjkkpNBMs0xR_EvqwLFQZRRVXccQQTLl-pUA37NvzvUQ3NJQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white pixel-border px-6 flex items-center justify-center gap-3 hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group h-[80px] w-full max-w-[380px] relative"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl">how_to_reg</span>
              <span className="font-pixel text-lg tracking-wider uppercase">Register Now!</span>
            </div>
            <ArrowRight className="w-6 h-6 absolute right-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </a>
        </div>
      </header>


      {/* Level Map */}
      <section className="max-w-4xl mx-auto px-4 mb-8 mt-0 relative z-10">
        <div className="text-center mb-6">
          <h2 className="font-pixel text-2xl text-slate-900 mb-4">— LEVEL MAP —</h2>
          <p className="text-slate-800 font-bold uppercase tracking-widest text-sm mb-2">Clear all 10 checkpoints</p>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">Click on the card to advance to the next step once you're ready.</p>
        </div>

        <div className="relative w-full max-w-lg mx-auto h-[550px] md:h-[500px] perspective-1000">
          {CHECKPOINTS.map((checkpoint, index) => {
            const isActive = index === activeStepIndex;
            const isPast = index < activeStepIndex;
            const offset = index - activeStepIndex;
            const isVisible = offset >= 0 && offset < 4;
            
            let transform = '';
            let opacity = 0;
            let zIndex = 0;
            let pointerEvents = 'none';

            if (isActive) {
              transform = 'translateY(0) scale(1)';
              opacity = 1;
              zIndex = 10;
              pointerEvents = 'auto';
            } else if (isPast) {
              transform = 'translateY(-100px) scale(0.95)';
              opacity = 0;
              zIndex = 0;
            } else if (isVisible) {
              transform = `translateY(${offset * 25}px) scale(${1 - offset * 0.05})`;
              opacity = 1 - (offset * 0.15);
              zIndex = 10 - offset;
            } else {
              transform = 'translateY(100px) scale(0.85)';
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div 
                key={checkpoint.id} 
                className={`absolute inset-0 bg-white pixel-border p-6 flex flex-col transition-all duration-500 shadow-xl cursor-pointer select-none
                  ${isActive ? 'hover:-translate-y-2 hover:shadow-2xl' : ''}
                `}
                style={{
                  transform: isActive ? '' : transform,
                  opacity,
                  zIndex,
                  pointerEvents: pointerEvents as any
                }}
                onClick={() => {
                  if (isActive && activeStepIndex < CHECKPOINTS.length - 1) {
                    setActiveStepIndex(prev => prev + 1);
                  }
                }}
              >
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="font-pixel text-5xl text-purple-600 drop-shadow-sm">
                    {checkpoint.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="font-pixel text-3xl text-slate-900 mb-4">{checkpoint.title}</h3>
                <p className="font-bold text-slate-800 text-lg mb-6 bg-slate-100/50 p-3 rounded-sm inline-block w-fit font-subtext">{checkpoint.subtitle}</p>
                
                <ul className="space-y-4 mb-8">
                  {checkpoint.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 text-base leading-relaxed">
                      <span className="text-purple-500 mt-0.5 flex-shrink-0 text-xl leading-none">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {checkpoint.copyText && (
                  <div className="pt-4 flex items-center gap-2 relative z-10 border-t-2 border-slate-100/50">
                    <code className="flex-1 bg-slate-100 p-3 pixel-border text-center font-mono font-bold text-slate-800 text-sm tracking-wide">
                      {checkpoint.copyText}
                    </code>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(checkpoint.copyText!, `copy-${checkpoint.id}`);
                      }}
                      className="bg-slate-900 text-white p-3 pixel-border hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center gap-1 w-16"
                    >
                      {copiedId === `copy-${checkpoint.id}` ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span className="text-[8px] font-pixel uppercase tracking-widest">{copiedId === `copy-${checkpoint.id}` ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}
                
                {checkpoint.multiCopy && (
                  <div className="pt-4 space-y-3 relative z-10 border-t-2 border-slate-100/50">
                    {checkpoint.multiCopy.map((text, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <code className="flex-1 bg-slate-100 p-2.5 pixel-border text-sm font-mono text-slate-700 truncate">
                          {text}
                        </code>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(text, `multi-${checkpoint.id}-${i}`);
                          }}
                          className="bg-slate-900 text-white p-2.5 pixel-border hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-center w-12"
                        >
                          {copiedId === `multi-${checkpoint.id}-${i}` ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {checkpoint.link && (
                  <a 
                    href={checkpoint.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="pt-4 flex items-center justify-center gap-2 bg-blue-50 text-blue-800 pixel-border p-3 hover:bg-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md font-bold text-base shadow-sm relative z-10"
                  >
                    🔗 {checkpoint.link.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Stack Controls */}
        <div className="flex justify-between items-center max-w-lg mx-auto mt-12 relative z-20">
          <button 
            onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
            className={`font-pixel text-[10px] uppercase tracking-widest px-5 py-3 pixel-border transition-colors ${activeStepIndex === 0 ? 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            disabled={activeStepIndex === 0}
          >
            ← Back
          </button>
          
          <div className="font-pixel text-xs text-slate-600 bg-white pixel-border px-4 py-2">
            {activeStepIndex + 1} / {CHECKPOINTS.length}
          </div>

          <button 
            onClick={() => setActiveStepIndex(Math.min(CHECKPOINTS.length - 1, activeStepIndex + 1))}
            className={`font-pixel text-[10px] uppercase tracking-widest px-5 py-3 pixel-border transition-colors ${activeStepIndex === CHECKPOINTS.length - 1 ? 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            disabled={activeStepIndex === CHECKPOINTS.length - 1}
          >
            Next →
          </button>
        </div>
      </section>

      {/* Quick-Scan Checklist */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-slate-900 text-white pixel-border-lg p-6 md:p-10 shadow-2xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
          {/* Decorative scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>

          <h2 className="font-pixel text-xl mb-8 text-center text-purple-400 drop-shadow-sm">QUICK-SCAN CHECKLIST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {QUICK_SCAN.map(item => {
              const isChecked = collected.includes(item.id);
              return (
                <div 
                  key={item.id} 
                  onClick={() => toggleCollect(item.id)}
                  className={`flex items-start gap-4 p-4 pixel-border transition-all duration-300 cursor-pointer hover:scale-[1.01] ${isChecked ? 'bg-green-900/40 border-green-500/50 scale-[1.01]' : 'bg-slate-800 border-slate-700'}`}
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 animate-pulse" />
                  ) : (
                    <div className="w-6 h-6 border-2 border-slate-600 bg-slate-700 rounded-full flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm font-medium ${isChecked ? 'text-green-50' : 'text-slate-400'}`}>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Important Resources Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-pixel text-2xl text-slate-900 mb-4">— IMPORTANT RESOURCES —</h2>
          <p className="text-slate-600 font-subtext font-medium text-lg">📚 Essential guides and documentation for the Facilitator program.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-subtext">
          {/* Card 1 */}
          <div className="bg-white pixel-border p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="material-symbols-outlined text-6xl mb-4 text-blue-500 block">book_ribbon</span>
            <h3 className="font-pixel text-base text-slate-900 mb-3">Facilitator Syllabus</h3>
            <p className="text-slate-600 mb-6 flex-1 font-medium leading-relaxed">
              Official Google Cloud Arcade Facilitator 2026 syllabus covering milestones, activities, responsibilities, and the complete learning roadmap.
            </p>
            <a 
              href="https://rsvp.withgoogle.com/events/arcade-facilitator/syllabus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-3 px-4 transition-all duration-300 w-full uppercase mt-4"
            >
              Open Resource
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white pixel-border p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="material-symbols-outlined text-6xl mb-4 text-pink-500 block">crown</span>
            <h3 className="font-pixel text-base text-slate-900 mb-3">Bonus Milestone</h3>
            <p className="text-slate-600 mb-6 flex-1 font-medium leading-relaxed">
              Learn how to complete bonus milestone activities and maximize your Arcade rewards throughout the program.
            </p>
            <a 
              href="https://rsvp.withgoogle.com/events/arcade-facilitator/bonus-milestone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-3 px-4 transition-all duration-300 w-full uppercase mt-4"
            >
              Open Resource
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white pixel-border p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="material-symbols-outlined text-6xl mb-4 text-yellow-500 block">hotel_class</span>
            <h3 className="font-pixel text-base text-slate-900 mb-3">Points System</h3>
            <p className="text-slate-600 mb-6 flex-1 font-medium leading-relaxed">
              Understand how Arcade Points are calculated, how leaderboards work, and how to earn points efficiently.
            </p>
            <a 
              href="https://rsvp.withgoogle.com/events/arcade-facilitator/points-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-3 px-4 transition-all duration-300 w-full uppercase mt-4"
            >
              Open Resource
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white pixel-border p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="material-symbols-outlined text-6xl mb-4 text-emerald-500 block">docs</span>
            <h3 className="font-pixel text-base text-slate-900 mb-3">Google Cloud Docs</h3>
            <p className="text-slate-600 mb-6 flex-1 font-medium leading-relaxed">
              Official Google Cloud documentation and guides to help you navigate cloud concepts and technical implementations.
            </p>
            <a 
              href="https://docs.cloud.google.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-3 px-4 transition-all duration-300 w-full uppercase mt-4"
            >
              Open Resource
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white pixel-border p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="material-symbols-outlined text-6xl mb-4 text-orange-500 block">settings</span>
            <h3 className="font-pixel text-base text-slate-900 mb-3">GEAR Program</h3>
            <p className="text-slate-600 mb-6 flex-1 font-medium leading-relaxed">
              Learn more about the Google Developer Program and GEAR activities to level up your professional cloud presence.
            </p>
            <a 
              href="https://developers.google.com/program/gear" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-3 px-4 transition-all duration-300 w-full uppercase mt-4"
            >
              Open Resource
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Start Learning Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl text-slate-900 mb-4">— START LEARNING —</h2>
          <p className="text-slate-600 font-subtext font-medium text-lg">🚀 Embark on your learning journey to build cloud expertise.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-subtext">
          {/* Feature Card 1 */}
          <div className="bg-white pixel-border-lg p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
            <span className="material-symbols-outlined text-[80px] mb-6 relative z-10 text-green-500 block">joystick</span>
            <h3 className="font-pixel text-lg text-slate-900 mb-4 relative z-10">Google Cloud Arcade Games</h3>
            <div className="text-slate-600 mb-6 space-y-4 flex-1 font-medium leading-relaxed relative z-10">
              <p>Every month Google releases 6 new Arcade Games that can be completed to earn Arcade Points.</p>
              <p className="text-sm font-bold text-amber-600 bg-amber-50 p-3 rounded-lg">⚠️ Games have limited seats, so users should enroll and complete them as early as possible.</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Earn Arcade Points</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> New games every month</li>
              </ul>
            </div>
            <a href="https://go.cloudskillsboost.google/arcade" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-4 transition-all duration-300 uppercase mt-auto flex items-center justify-center">
              Explore Games
            </a>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white pixel-border-lg p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
            <span className="material-symbols-outlined text-[80px] mb-6 relative z-10 text-blue-500 block">cloud</span>
            <h3 className="font-pixel text-lg text-slate-900 mb-4 relative z-10">Google Cloud Skill Badges</h3>
            <div className="text-slate-600 mb-6 space-y-4 flex-1 font-medium leading-relaxed relative z-10">
              <p>Google Cloud Skill Badges are official digital credentials that validate practical cloud skills through hands-on labs and assessment challenges.</p>
              
              <details className="mt-4 group/details bg-slate-50 pixel-border p-4">
                <summary className="font-bold text-blue-600 cursor-pointer list-none flex justify-between items-center">
                  What is a Skill Badge?
                  <span className="transition-transform group-open/details:rotate-180">↓</span>
                </summary>
                <div className="mt-3 text-sm space-y-3 text-slate-700">
                  <p>An official Google Cloud digital credential that demonstrates your growing cloud expertise through practical, hands-on learning.</p>
                  <p className="font-bold text-slate-900">How do I earn one?</p>
                  <p>Complete a series of guided Google Cloud labs followed by a Challenge Lab assessment. Successfully passing the challenge awards you a verified Google Cloud Skill Badge that can be shared on LinkedIn, resumes, and professional profiles.</p>
                </div>
              </details>
            </div>
            <a href="https://www.skills.google/catalog" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-4 transition-all duration-300 uppercase mt-auto flex items-center justify-center">
              View Skill Badges
            </a>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white pixel-border-lg p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
            <span className="material-symbols-outlined text-[80px] mb-6 relative z-10 text-purple-500 block">trophy</span>
            <div className="relative z-10 mb-4">
              <h3 className="font-pixel text-lg text-slate-900 mb-2">GEAR Learning Paths & Badges</h3>
              <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-pixel px-3 py-1 pixel-border uppercase tracking-wide">Bonus Milestone</span>
            </div>
            <div className="text-slate-600 mb-6 space-y-4 flex-1 font-medium leading-relaxed relative z-10">
              <p>GEAR Learning Paths provide structured learning journeys designed to help facilitators build deeper cloud expertise while completing bonus milestone requirements.</p>
            </div>
            <button className="relative z-10 w-full bg-purple-600 text-white hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg pixel-border font-pixel text-[10px] tracking-wider py-4 transition-all duration-300 uppercase mt-auto">
              Explore Learning Paths
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-[6px] border-purple-600 p-5 rounded-none mb-12 inline-flex flex-col md:flex-row items-center gap-4 text-purple-900 text-sm font-bold shadow-xl hover:-translate-y-1 transition-transform duration-300">
          <span className="material-symbols-outlined text-4xl text-purple-600 animate-bounce">featured_seasonal_and_gifts</span> 
          <span>Bonus: completing enrolment enters you for a chance to win Google Cloud goodies.</span>
        </div>
        
        <h2 className="font-pixel text-xl text-slate-900 mb-6 drop-shadow-sm">GAME OVER? NO — GAME ON.</h2>
        <p className="text-slate-700 font-subtext mb-10 max-w-2xl mx-auto font-medium">
          Questions about any checkpoint? <a href="https://chat.whatsapp.com/JrMiOYzCCqJB0TYs4JPRtS" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline font-bold hover:text-purple-700">Connect on WhatsApp</a> with the Arcade Facilitator Team.
        </p>



        <p className="font-pixel text-[10px] md:text-xs text-slate-500 tracking-[0.3em] uppercase mb-8 opacity-80">
          LET'S BUILD THE CLOUD TOGETHER
        </p>

        <div className="bg-white text-slate-900 font-pixel text-[10px] md:text-xs px-3 py-2 pixel-border shadow-sm inline-flex items-center gap-2 mb-8 mx-auto">
          <span className="material-symbols-outlined text-sm">visibility</span>
          VIEWS: {views}
        </div>
      </footer>
    </div>
  );
}
