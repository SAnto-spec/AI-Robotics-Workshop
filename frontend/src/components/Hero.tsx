import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero(): React.JSX.Element {
  const scrollToForm = (): void => {
    const formElement = document.getElementById('register-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden pt-12 pb-16 flex flex-col items-center">
      {/* Cartoon Background Shapes */}
      <div className="absolute top-10 left-10 h-16 w-16 bg-amber-300 rounded-2xl border-3 border-slate-800 rotate-12 animate-float pointer-events-none"></div>
      <div className="absolute bottom-12 right-10 h-20 w-20 bg-sky-300 rounded-full border-3 border-slate-800 animate-float-delayed pointer-events-none"></div>
      <div className="absolute top-1/2 left-[80%] h-14 w-14 bg-pink-300 rounded-xl border-3 border-slate-800 -rotate-12 animate-float-slow pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Playful Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border-3 border-slate-800 bg-amber-300 px-5 py-2 text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wider shadow-[3px_3px_0px_0px_#1e293b]">
            <Star className="h-4 w-4 fill-current text-slate-800 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Summer Coding Camp 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-6xl font-heading leading-tight">
            AI & Robotics <br />
            <span className="text-grad-orange">Summer Workshop</span>
          </h1>

          {/* Description */}
          <p className="mx-auto lg:mx-0 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-bold">
            Spark your child's curiosity this summer! A hands-on, highly interactive online coding adventure where kids design virtual robot systems, play with smart AI models, and build critical problem-solving skills.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
            <button
              onClick={scrollToForm}
              className="bubbly-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-8 py-4 text-base font-black text-white cursor-pointer"
            >
              <span>Book A Seat</span>
              <ArrowRight className="h-5 w-5 stroke-[3]" />
            </button>
            
            <a
              href="#details"
              className="bubbly-btn w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-black text-slate-700 shadow-sm"
            >
              View Schedule
            </a>
          </div>

          {/* highlights bento tags */}
          <div className="pt-6 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
            <div className="text-center bg-white/70 backdrop-blur-md border-3 border-slate-800 p-3 rounded-2xl shadow-[3px_3px_0px_0px_#1e293b] hover:-translate-y-1 transition-transform">
              <span className="text-2xl">🤖</span>
              <p className="text-[10px] sm:text-xs font-black text-slate-700 mt-1">Robotics Builder</p>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-md border-3 border-slate-800 p-3 rounded-2xl shadow-[3px_3px_0px_0px_#1e293b] hover:-translate-y-1 transition-transform">
              <span className="text-2xl">⚡</span>
              <p className="text-[10px] sm:text-xs font-black text-slate-700 mt-1">Smart AI Tools</p>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-md border-3 border-slate-800 p-3 rounded-2xl shadow-[3px_3px_0px_0px_#1e293b] hover:-translate-y-1 transition-transform">
              <span className="text-2xl">🎮</span>
              <p className="text-[10px] sm:text-xs font-black text-slate-700 mt-1">Game Projects</p>
            </div>
          </div>
        </div>

        {/* Right Side: Playful Illustration Overlayed on Glass Panel */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md p-6 rounded-3xl border-3 border-slate-800 bg-white/45 backdrop-blur-xl shadow-[6px_6px_0px_0px_#1e293b] animate-float">
            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-purple-400/20 rounded-3xl blur-[40px] -z-10"></div>
            
            {/* Kids AI/Robo SVG Illustration */}
            <svg viewBox="0 0 500 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Background decorative orbits */}
              <circle cx="250" cy="250" r="210" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8" />
              <circle cx="250" cy="250" r="150" fill="none" stroke="#f1f5f9" strokeWidth="3" />

              {/* FLOATING AI ROBOT MASCOT (Top Center) */}
              <g id="robot-mascot" className="animate-float">
                {/* Robot Antenna */}
                <line x1="250" y1="130" x2="250" y2="100" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                <circle cx="250" cy="90" r="14" fill="#ec4899" stroke="#1e293b" strokeWidth="6" />
                
                {/* Robot Head */}
                <rect x="200" y="130" width="100" height="85" rx="24" fill="#e0f2fe" stroke="#1e293b" strokeWidth="8" />
                {/* Robot Ears */}
                <rect x="180" y="155" width="20" height="35" rx="8" fill="#93c5fd" stroke="#1e293b" strokeWidth="6" />
                <rect x="300" y="155" width="20" height="35" rx="8" fill="#93c5fd" stroke="#1e293b" strokeWidth="6" />
                
                {/* Robot Eyes Screen */}
                <rect x="215" y="150" width="70" height="32" rx="12" fill="#1e293b" />
                {/* Blinking Blue Eyes */}
                <circle cx="235" cy="166" r="8" fill="#38bdf8" />
                <circle cx="235" cy="166" r="3" fill="#ffffff" />
                <circle cx="265" cy="166" r="8" fill="#38bdf8" />
                <circle cx="265" cy="166" r="3" fill="#ffffff" />
                
                {/* Cheerful Mouth */}
                <path d="M 238,190 Q 250,198 262,190" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
                
                {/* Robot Body */}
                <rect x="215" y="215" width="70" height="50" rx="16" fill="#bae6fd" stroke="#1e293b" strokeWidth="8" />
                {/* Heart/Energy panel */}
                <circle cx="250" cy="240" r="10" fill="#22c55e" stroke="#1e293b" strokeWidth="3" />
                
                {/* Waving Hands */}
                <path d="M 215,225 Q 185,200 170,210" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                <path d="M 285,225 Q 315,200 330,210" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
              </g>

              {/* ROBOTIC ARM (Bottom Right) */}
              <g id="robot-arm">
                <path d="M 450,450 Q 420,380 370,370" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
                <circle cx="370" cy="370" r="12" fill="#64748b" stroke="#1e293b" strokeWidth="4" />
                {/* Clamp holding lightbulb */}
                <path d="M 370,358 Q 350,340 360,330" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                <path d="M 370,382 Q 380,395 390,380" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Glowing Lightbulb */}
                <circle cx="350" cy="320" r="16" fill="#eab308" stroke="#1e293b" strokeWidth="5" />
                <rect x="344" y="334" width="12" height="8" rx="2" fill="#94a3b8" stroke="#1e293b" strokeWidth="4" />
                {/* Yellow glows */}
                <line x1="350" y1="298" x2="350" y2="292" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
                <line x1="332" y1="312" x2="326" y2="310" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
                <line x1="368" y1="312" x2="374" y2="310" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
              </g>

              {/* LEFT CHILD - GIRL (Bottom Left) */}
              <g id="girl-coder">
                {/* Body/Shirt */}
                <path d="M 70,450 L 140,450 L 125,390 L 85,390 Z" fill="#ec4899" stroke="#1e293b" strokeWidth="8" strokeLinejoin="round" />
                {/* Neck */}
                <rect x="98" y="375" width="14" height="20" fill="#fdba74" stroke="#1e293b" strokeWidth="8" />
                {/* Head */}
                <circle cx="105" cy="350" r="32" fill="#fdba74" stroke="#1e293b" strokeWidth="8" />
                {/* Hair Pony Tails */}
                <circle cx="72" cy="330" r="15" fill="#78350f" stroke="#1e293b" strokeWidth="8" />
                <circle cx="138" cy="330" r="15" fill="#78350f" stroke="#1e293b" strokeWidth="8" />
                <path d="M 80,335 Q 105,310 130,335" fill="none" stroke="#78350f" strokeWidth="18" strokeLinecap="round" />
                {/* Glasses */}
                <circle cx="95" cy="350" r="12" fill="none" stroke="#a855f7" strokeWidth="5" />
                <circle cx="115" cy="350" r="12" fill="none" stroke="#a855f7" strokeWidth="5" />
                <line x1="101" y1="350" x2="109" y2="350" stroke="#1e293b" strokeWidth="5" />
                {/* Face details */}
                <circle cx="93" cy="350" r="2.5" fill="#1e293b" />
                <circle cx="117" cy="350" r="2.5" fill="#1e293b" />
                <path d="M 100,366 Q 105,372 110,366" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                {/* Arm reaching to Laptop */}
                <path d="M 115,410 Q 145,415 165,405" fill="none" stroke="#fdba74" strokeWidth="8" strokeLinecap="round" />
              </g>

              {/* RIGHT CHILD - BOY (Bottom Right) */}
              <g id="boy-coder">
                {/* Body/Shirt */}
                <path d="M 280,450 L 350,450 L 335,395 L 295,395 Z" fill="#22c55e" stroke="#1e293b" strokeWidth="8" strokeLinejoin="round" />
                {/* Neck */}
                <rect x="308" y="380" width="14" height="20" fill="#fdba74" stroke="#1e293b" strokeWidth="8" />
                {/* Head */}
                <circle cx="315" cy="355" r="32" fill="#fdba74" stroke="#1e293b" strokeWidth="8" />
                {/* Curly Hair */}
                <path d="M 290,340 Q 315,310 340,340" fill="none" stroke="#1e293b" strokeWidth="20" strokeLinecap="round" />
                <circle cx="300" cy="330" r="10" fill="#1e293b" />
                <circle cx="315" cy="325" r="11" fill="#1e293b" />
                <circle cx="330" cy="330" r="10" fill="#1e293b" />
                {/* Face details */}
                <circle cx="303" cy="355" r="3.5" fill="#1e293b" />
                <circle cx="327" cy="355" r="3.5" fill="#1e293b" />
                <path d="M 308,368 Q 315,378 322,368" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                {/* Arm pointing to screen */}
                <path d="M 300,410 Q 270,405 250,395" fill="none" stroke="#fdba74" strokeWidth="8" strokeLinecap="round" />
              </g>

              {/* CODER LAPTOP (Bottom Center) */}
              <g id="kids-laptop">
                {/* Screen base */}
                <rect x="175" y="365" width="70" height="50" rx="6" fill="#475569" stroke="#1e293b" strokeWidth="6" />
                <rect x="182" y="372" width="56" height="36" fill="#0f172a" />
                {/* Code snippets on screen */}
                <rect x="187" y="378" width="20" height="4" rx="1" fill="#ec4899" />
                <rect x="187" y="386" width="35" height="4" rx="1" fill="#38bdf8" />
                <rect x="187" y="394" width="28" height="4" rx="1" fill="#22c55e" />
                {/* Keyboard base */}
                <polygon points="160,420 260,420 270,432 150,432" fill="#94a3b8" stroke="#1e293b" strokeWidth="6" strokeLinejoin="round" />
              </g>

              {/* FLOATING ICONS & ACCENTS */}
              {/* Gear (Left Center) */}
              <g transform="translate(60, 240) scale(0.8)" className="animate-float">
                <circle cx="20" cy="20" r="12" fill="none" stroke="#1e293b" strokeWidth="6" />
                <path d="M 20,2 L 20,8 M 20,32 L 20,38 M 2,20 L 8,20 M 32,20 L 38,20 M 7,7 L 12,12 M 28,28 L 33,33 M 7,33 L 12,28 M 28,7 L 33,12" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                <circle cx="20" cy="20" r="16" fill="#f97316" stroke="#1e293b" strokeWidth="6" />
              </g>

              {/* Code tags </> (Right Center) */}
              <g transform="translate(390, 260) scale(0.9)" className="animate-float-delayed">
                <circle cx="20" cy="20" r="22" fill="#c084fc" opacity="0.2" />
                <text x="8" y="29" fontSize="26" fill="#a855f7" fontWeight="black" fontFamily="sans-serif">&lt;/&gt;</text>
              </g>

              {/* STEM Atom (Left Top) */}
              <g transform="translate(70, 70) scale(0.7)" className="animate-float-slow">
                <ellipse cx="30" cy="30" rx="30" ry="10" fill="none" stroke="#0ea5e9" strokeWidth="4" transform="rotate(30, 30, 30)" />
                <ellipse cx="30" cy="30" rx="30" ry="10" fill="none" stroke="#0ea5e9" strokeWidth="4" transform="rotate(-30, 30, 30)" />
                <circle cx="30" cy="30" r="8" fill="#eab308" stroke="#1e293b" strokeWidth="3" />
              </g>

              {/* Star Sparkles */}
              <path d="M 400,80 L 405,95 L 420,95 L 408,105 L 412,120 L 400,110 L 388,120 L 392,105 L 380,95 L 395,95 Z" fill="#eab308" stroke="#1e293b" strokeWidth="4" className="animate-float" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
