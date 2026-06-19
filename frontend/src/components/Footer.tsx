import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t-3 border-slate-800 bg-slate-50 py-12 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-base border-2 border-slate-800 shadow-[1px_1px_0px_0px_#1e293b]">
                🤖
              </span>
              <span className="text-xl font-extrabold text-slate-800 font-heading">
                Future<span className="text-orange-500">Minds</span>
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500 font-bold">
              We make cutting-edge concepts like AI, coding, and engineering incredibly simple, fun, and visual for the young leaders of tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 font-heading">Quick Navigation</h3>
            <ul className="space-y-2 text-sm font-black">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">Overview</a></li>
              <li><a href="#details" className="hover:text-orange-500 transition-colors">Schedule Details</a></li>
              <li><a href="#outcomes" className="hover:text-orange-500 transition-colors">What You'll Learn</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors">Parent FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 font-heading">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" aria-label="Twitter" className="p-2 rounded-xl bg-white border-2 border-slate-800 text-slate-800 hover:text-orange-500 hover:border-orange-200 transition-all shadow-[2px_2px_0px_0px_#1e293b]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-xl bg-white border-2 border-slate-800 text-slate-800 hover:text-orange-500 hover:border-orange-200 transition-all shadow-[2px_2px_0px_0px_#1e293b]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-xl bg-white border-2 border-slate-800 text-slate-800 hover:text-orange-500 hover:border-orange-200 transition-all shadow-[2px_2px_0px_0px_#1e293b]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <p className="text-xs font-bold text-slate-500">
              Parent Hotline: support@FutureMinds.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t-2 border-slate-100 pt-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4 font-bold">
          <p>© {new Date().getFullYear()} FutureMinds. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
