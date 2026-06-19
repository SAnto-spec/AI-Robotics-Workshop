import React from 'react';
import { Cpu, Gamepad2, BrainCircuit, Award, Compass, Star } from 'lucide-react';

interface OutcomeItem {
  icon: React.JSX.Element;
  title: string;
  desc: string;
  colSpan: string;
  shadowColor: string;
}

export default function Outcomes(): React.JSX.Element {
  const outcomes: OutcomeItem[] = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-slate-800" />,
      title: 'Fun AI Adventures',
      desc: 'Discover how computers learn to recognise faces, trace hands, and read voice commands using visual block models.',
      colSpan: 'md:col-span-1',
      shadowColor: 'cartoon-shadow-sky'
    },
    {
      icon: <Compass className="h-6 w-6 text-slate-800" />,
      title: 'Virtual Robotics Lab',
      desc: 'Build, wire, and write code to guide virtual robots through paths, detect obstacles, and clean up digital mazes.',
      colSpan: 'md:col-span-1',
      shadowColor: 'cartoon-shadow-orange'
    },
    {
      icon: <Cpu className="h-6 w-6 text-slate-800" />,
      title: 'Logical Thinking Blocks',
      desc: 'Break down complex challenges into bite-sized steps using algorithmic trees and fun coding logic. Play with loops, functions, and state blocks.',
      colSpan: 'md:col-span-2',
      shadowColor: 'cartoon-shadow-purple'
    },
    {
      icon: <Gamepad2 className="h-6 w-6 text-slate-800" />,
      title: 'Design Cool Games',
      desc: 'Bring ideas to life by crafting simple interactive physics-based games, custom characters, and soundboards.',
      colSpan: 'md:col-span-1',
      shadowColor: 'cartoon-shadow-pink'
    },
    {
      icon: <Award className="h-6 w-6 text-slate-800" />,
      title: 'Official STEM Certificate',
      desc: 'Showcase a finished Capstone Project to friends and family, and claim a personalized STEM workshop badge.',
      colSpan: 'md:col-span-2',
      shadowColor: 'cartoon-shadow-yellow'
    }
  ];

  return (
    <section id="outcomes" className="py-20 relative bg-white overflow-hidden">
      {/* Soft circular glows */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 rounded-full bg-pink-100/40 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 h-80 w-80 rounded-full bg-sky-100/40 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 bg-pink-200 border-2 border-slate-800 text-slate-800 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1e293b]">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>Interactive Learning</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl font-heading">
            What Kids Will Create & Learn
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-bold">
            A playful curriculum that blends advanced artificial intelligence with physical and virtual engineering principles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Visual Card - spans 1 col, 2 rows */}
          <div className="bento-card md:col-span-1 md:row-span-2 bg-gradient-to-br from-amber-400 to-orange-500 p-8 text-slate-800 shadow-md border-3 border-slate-800 cartoon-shadow-orange flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
            <div className="space-y-6">
              <span className="inline-flex items-center justify-center text-[10px] sm:text-xs font-black uppercase tracking-wider bg-white border-2 border-slate-800 px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1e293b] w-fit">
                Syllabus Focus
              </span>
              <h3 className="text-3xl font-black tracking-tight leading-tight font-heading">
                STEM Concepts Built For Young Minds
              </h3>
              <p className="text-slate-800 text-sm font-bold leading-relaxed">
                No boring syntax lectures! We teach by building. Each child creates physical maps, designs game boards, and compiles code interactively.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-slate-800 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span className="text-xs font-black uppercase tracking-wider">Perfect for 8-14 Age Cohort</span>
            </div>
          </div>

          {/* Bento outcome cards */}
          {outcomes.map((item, index) => (
            <div
              key={index}
              className={`bento-card p-8 flex flex-col justify-between ${item.colSpan} ${item.shadowColor}`}
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-50 border-2 border-slate-800 rounded-2xl shadow-[2px_2px_0px_0px_#1e293b] w-fit">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-800 leading-tight font-heading">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-base font-bold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
