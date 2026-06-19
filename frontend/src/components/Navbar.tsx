import React from 'react';

export default function Navbar(): React.JSX.Element {
  const scrollToForm = (): void => {
    const formElement = document.getElementById('register-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-7xl w-[95%] sm:w-[90%] rounded-3xl border-3 border-slate-800 bg-white/60 backdrop-blur-lg shadow-[4px_4px_0px_0px_#1e293b] py-3 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        {/* Logo / Branding */}
        <div className="flex items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-2xl border-2 border-slate-800 shadow-[2px_2px_0px_0px_#1e293b]">
            🤖
          </span>
          <span className="text-2xl font-black tracking-tight text-slate-800 font-heading">
            Future<span className="text-orange-500">Minds</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-extrabold text-slate-600">
          <a href="#about" className="hover:text-orange-500 transition-colors">Overview</a>
          <a href="#details" className="hover:text-orange-500 transition-colors">Schedules</a>
          <a href="#outcomes" className="hover:text-orange-500 transition-colors">What You'll Learn</a>
          <a href="#faq" className="hover:text-orange-500 transition-colors">FAQs</a>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={scrollToForm}
            className="bubbly-btn inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-2.5 text-sm font-black text-white cursor-pointer"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}
