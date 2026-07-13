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

      {/* Bottom Right Overlay */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <div className="bg-white text-slate-900 font-pixel text-[10px] md:text-xs px-3 py-2 pixel-border shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">visibility</span>
          VIEWS: {views}
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
      <header className="pt-16 pb-8 px-4 text-center max-w-3xl mx-auto">
        <h2 className="font-pixel text-sm text-purple-600 mb-4 tracking-widest uppercase">Registration Prerequisites Guide</h2>
        <h1 className="font-pixel text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
          ARCADE FACILITATOR<br/><span className="text-purple-600">PROGRAM 2026</span>
        </h1>
        <p className="text-slate-700 font-subtext text-lg max-w-xl mx-auto mb-10 font-medium">
          Ten checkpoints stand between you and enrolment. Clear each level below, collect your credentials, then take on the final boss — the enrolment form itself.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-white pixel-border px-6 py-3 flex items-center gap-3 shadow-sm">
            <Calendar className="text-purple-500 w-6 h-6" />
            <div className="text-left">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Enrolment window closes</div>
              <div className="font-pixel text-sm text-slate-900 mt-1">13 - 20 JULY 2026</div>
            </div>
          </div>
          
          <a href="https://arcadecalc.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white pixel-border px-6 py-4 flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg group">
            <span className="font-pixel text-xs tracking-wider">📊 Track everything on ArcadeCalc</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </header>

      {/* Progress Section */}
      <section className="max-w-4xl mx-auto px-4 mb-16 relative z-10">
        <div className="bg-white pixel-border p-6 md:p-8 shadow-xl">
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-pixel text-xl text-slate-900">PROGRESS</h3>
            <span className="font-pixel text-sm text-purple-600">{collected.length} / 10 levels cleared</span>
          </div>
          <div className="w-full h-8 bg-slate-200 pixel-border p-1 relative overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out relative" 
              style={{ width: `${progress}%` }} 
            >
              {/* Add a subtle highlight to the progress bar for retro feel */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Map */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-pixel text-2xl text-slate-900 mb-4">— LEVEL MAP —</h2>
          <p className="text-slate-800 font-bold uppercase tracking-widest text-sm mb-2">Clear all 10 checkpoints</p>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">Tap "Collect" on each level once you've completed it, and watch your progress bar fill up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHECKPOINTS.map((checkpoint) => {
            const isCollected = collected.includes(checkpoint.id);
            return (
              <div key={checkpoint.id} className={`bg-white pixel-border p-6 flex flex-col transition-colors duration-300 shadow-md ${isCollected ? 'border-green-500 bg-green-50' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="font-pixel text-5xl text-purple-600 drop-shadow-sm">
                    {checkpoint.id.toString().padStart(2, '0')}
                  </div>
                  <button 
                    onClick={() => toggleCollect(checkpoint.id)}
                    className={`font-pixel text-[10px] uppercase tracking-wider px-4 py-3 pixel-border transition-colors flex items-center gap-2
                      ${isCollected ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-purple-600 text-white hover:bg-purple-700'}
                    `}
                  >
                    {isCollected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Collected
                      </>
                    ) : (
                      'Collect'
                    )}
                  </button>
                </div>
                
                <h3 className="font-pixel text-lg text-slate-900 mb-3">{checkpoint.title}</h3>
                <p className="font-bold text-slate-800 mb-4 bg-slate-100/50 p-2 rounded-sm inline-block w-fit font-subtext">{checkpoint.subtitle}</p>
                
                <ul className="space-y-3 mb-6 flex-1">
                  {checkpoint.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                      <span className="text-purple-500 mt-1 flex-shrink-0 text-lg leading-none">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {checkpoint.copyText && (
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <code className="flex-1 bg-slate-100 p-3 pixel-border text-center font-mono font-bold text-slate-800 text-sm tracking-wide">
                      {checkpoint.copyText}
                    </code>
                    <button 
                      onClick={() => handleCopy(checkpoint.copyText!, `copy-${checkpoint.id}`)}
                      className="bg-slate-900 text-white p-3 pixel-border hover:bg-slate-800 transition-colors flex flex-col items-center justify-center gap-1 w-16"
                    >
                      {copiedId === `copy-${checkpoint.id}` ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      <span className="text-[8px] font-pixel uppercase tracking-widest">{copiedId === `copy-${checkpoint.id}` ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}
                
                {checkpoint.multiCopy && (
                  <div className="mt-auto pt-4 space-y-3">
                    {checkpoint.multiCopy.map((text, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <code className="flex-1 bg-slate-100 p-2.5 pixel-border text-sm font-mono text-slate-700 truncate">
                          {text}
                        </code>
                        <button 
                          onClick={() => handleCopy(text, `multi-${checkpoint.id}-${i}`)}
                          className="bg-slate-900 text-white p-2.5 pixel-border hover:bg-slate-800 transition-colors flex items-center justify-center w-12"
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
                    className="mt-auto pt-4 flex items-center justify-center gap-2 bg-blue-50 text-blue-800 pixel-border p-3 hover:bg-blue-100 transition-colors font-bold text-sm shadow-sm"
                  >
                    🔗 {checkpoint.link.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick-Scan Checklist */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-slate-900 text-white pixel-border-lg p-6 md:p-10 shadow-2xl relative overflow-hidden">
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

      {/* Preview Section */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-pixel text-2xl text-slate-900 mb-4">— PREVIEW —</h2>
          <p className="text-slate-800 font-bold uppercase tracking-widest text-sm mb-2">What the enrolment form asks for</p>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">A sample of the (Google Sign-in required) Arcade Facilitator 2026 enrolment form, based on the guide's attached reference.</p>
        </div>

        <div className="bg-white pixel-border-lg p-6 md:p-10 relative shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-3 bg-purple-600"></div>
          
          <div className="mb-8 border-b-2 border-slate-200 pb-8 mt-4">
            <div className="inline-block bg-blue-100 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 w-fit border border-blue-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> GOOGLE SIGN-IN REQUIRED
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">(Sample) Arcade Facilitator 2026 — User Enrolment Form</h3>
            <p className="text-slate-600 font-medium">Google Cloud Arcade · Facilitator Program 2026</p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Full name", req: "required", type: "req" },
              { label: "Email address", req: "required", type: "req" },
              { label: "Country you're based in", req: "required", type: "req" },
              { label: "Confirm: Skills Boost profile created & public", req: "mandatory", type: "man" },
              { label: "Confirm: Developer Profile created & public", req: "mandatory", type: "man" },
              { label: "Developer Profile URL", req: "mandatory", type: "man" },
              { label: "Facilitator referral code — GCAF26-IN-EMZ-46U", req: "mandatory", type: "man" }
            ].map((field, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-sm border border-slate-200 hover:bg-slate-100 transition-colors">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="font-bold text-slate-800 text-sm md:text-base">{field.label}</p>
                  <p className={`text-xs font-mono mt-1.5 uppercase tracking-widest font-bold ${field.type === 'req' ? 'text-red-600' : 'text-purple-600'}`}>
                    {field.req}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 p-5 rounded-lg mb-12 inline-flex flex-col md:flex-row items-center gap-4 text-purple-900 text-sm font-bold shadow-md">
          <span className="material-symbols-outlined text-4xl text-purple-600 animate-bounce">featured_seasonal_and_gifts</span> 
          <span>Bonus: completing enrolment enters you for a chance to win Google Cloud goodies.</span>
        </div>
        
        <h2 className="font-pixel text-xl text-slate-900 mb-6 drop-shadow-sm">GAME OVER? NO — GAME ON.</h2>
        <p className="text-slate-700 font-subtext mb-10 max-w-2xl mx-auto font-medium">
          Questions about any checkpoint? <a href="https://chat.whatsapp.com/JrMiOYzCCqJB0TYs4JPRtS" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline font-bold hover:text-purple-700">Connect on WhatsApp</a> with the Arcade Facilitator Team.
        </p>



        <p className="font-pixel text-[10px] md:text-xs text-slate-500 tracking-[0.3em] uppercase mb-12 opacity-80">
          LET'S BUILD THE CLOUD TOGETHER
        </p>
      </footer>
    </div>
  );
}
