import React from 'react';
import { Sparkles, Calendar, UserCheck, Clock, MonitorPlay, Wallet } from 'lucide-react';

interface DetailItem {
  icon: React.JSX.Element;
  title: string;
  value: string;
  desc: string;
  colSpan: string;
  shadowColor: string;
  badge: string;
}

export default function Details(): React.JSX.Element {
  const detailsData: DetailItem[] = [
    {
      icon: <UserCheck className="h-7 w-7 text-slate-800" />,
      title: 'Age Group',
      value: '8–14 Years',
      desc: 'Specifically designed for students & beginners. No prior coding or mathematics experience needed!',
      colSpan: 'md:col-span-3',
      shadowColor: 'cartoon-shadow-orange',
      badge: '🎯 Perfect Fit'
    },
    {
      icon: <Clock className="h-7 w-7 text-slate-800" />,
      title: 'Duration',
      value: '4 Weeks Program',
      desc: '12 engaging hours. Interactive weekend sessions: Sat & Sun (1.5h each) to ensure zero school clash.',
      colSpan: 'md:col-span-3',
      shadowColor: 'cartoon-shadow-purple',
      badge: '⚡ Weekend Batch'
    },
    {
      icon: <MonitorPlay className="h-7 w-7 text-slate-800" />,
      title: 'Mode',
      value: '100% Online',
      desc: 'Interactive live Zoom classes + lifetime dashboard access.',
      colSpan: 'md:col-span-2',
      shadowColor: 'cartoon-shadow-sky',
      badge: '💻 Virtual Lab'
    },
    {
      icon: <Wallet className="h-7 w-7 text-slate-800" />,
      title: 'Workshop Fee',
      value: '₹2,999 Only',
      desc: 'All resources, starter code templates & STEM certificate included.',
      colSpan: 'md:col-span-2',
      shadowColor: 'cartoon-shadow-green',
      badge: '🔥 Pocket Friendly'
    },
    {
      icon: <Calendar className="h-7 w-7 text-slate-800" />,
      title: 'Start Date',
      value: '15 July 2026',
      desc: 'Summer batch starts soon. Limited to 30 slots!',
      colSpan: 'md:col-span-2',
      shadowColor: 'cartoon-shadow-pink',
      badge: '📅 Registering'
    }
  ];

  return (
    <section id="details" className="py-20 relative bg-slate-50 border-y-3 border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-sky-200 border-2 border-slate-800 text-slate-800 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1e293b]">
            <Sparkles className="h-3.5 w-3.5 fill-current" />
            <span>Workshop Details</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl font-heading">
            Schedules & Batch Information
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-bold">
            Everything you need to know to lock in your child's schedule this summer.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {detailsData.map((item, index) => (
            <div
              key={index}
              className={`bento-card relative overflow-hidden p-8 flex flex-col justify-between ${item.colSpan} ${item.shadowColor}`}
            >
              {/* Glass glare effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white border-2 border-slate-800 rounded-2xl shadow-[2px_2px_0px_0px_#1e293b] w-fit">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-slate-800 text-white px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400 font-heading">
                    {item.title}
                  </p>
                  <h3 className="mt-1 text-3xl font-black text-slate-800 leading-tight">
                    {item.value}
                  </h3>
                </div>
              </div>
              
              <p className="mt-6 text-sm font-bold text-slate-500 leading-relaxed border-t-2 border-slate-100 pt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
