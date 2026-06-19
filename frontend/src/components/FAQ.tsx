import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Do kids need any coding background?',
      answer: 'Not at all! This workshop is crafted specifically for beginners. We use visual drag-and-drop block systems, colorful simulations, and gamified tasks that make learning fun and easy to understand.'
    },
    {
      question: 'What device is needed to join the classes?',
      answer: 'A desktop computer or laptop (Windows, Mac, or Chromebook) with a working webcam, microphone, and a stable internet connection is all you need. iPads/tablets can be used for viewing, but a computer is recommended for coding.'
    },
    {
      question: 'Who will be leading the interactive sessions?',
      answer: 'Our sessions are led by experienced, kid-friendly STEM instructors who know how to keep children engaged and excited. We maintain a small student-to-teacher ratio for personal attention.'
    },
    {
      question: 'Will there be recordings if my child misses a class?',
      answer: 'Yes! After each live class, we share the video recording in the parent portal within 24 hours. Your child can easily rewatch the session, review worksheets, and submit their assignments.'
    }
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t-3 border-slate-800 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-purple-200 border-2 border-slate-800 text-slate-800 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1e293b]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Support Board</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-bold">
            Find answers to common questions asked by parents regarding our syllabus, schedules, and tools.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-3xl border-3 border-slate-800 bg-white/60 backdrop-blur-md shadow-[4px_4px_0px_0px_#1e293b] hover:shadow-[6px_6px_0px_0px_#1e293b] hover:-translate-y-0.5 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-black text-slate-800 font-heading pr-4">
                    {faq.question}
                  </span>
                  <span className={`h-9 w-9 flex items-center justify-center rounded-full border-2 border-slate-800 transition-all duration-300 ${
                    isOpen ? 'bg-orange-400 text-white' : 'bg-slate-50 text-slate-500'
                  }`}>
                    <ChevronDown className="h-5 w-5 stroke-[3]" />
                  </span>
                </button>
                
                {/* Accordion Expand */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 border-t-2 border-slate-800 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 text-sm sm:text-base font-bold text-slate-600 leading-relaxed bg-white/45">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
