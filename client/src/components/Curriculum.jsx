import React from 'react';
import { BookOpen, Layers, Settings, Flag } from 'lucide-react';

export default function Curriculum() {
  const weeks = [
    {
      week: 'Week 1',
      title: 'Introduction to AI',
      icon: BookOpen,
      color: 'bg-blue-600 shadow-blue-500/20 ring-blue-100',
      textColor: 'text-blue-600',
      bullets: [
        'Understand what artificial intelligence is and how it powers smart devices.',
        'Explore machine learning models (image recognition, voice detection) via visual tools.',
        'Hands-on project: Train a custom image classifier model in real-time.',
      ],
    },
    {
      week: 'Week 2',
      title: 'Robotics Fundamentals',
      icon: Layers,
      color: 'bg-purple-600 shadow-purple-500/20 ring-purple-100',
      textColor: 'text-purple-600',
      bullets: [
        'Learn the structural components of robots (actuators, controllers, power sources).',
        'Introduction to block-based robot coding and logic blocks.',
        'Hands-on project: Assemble and program movement vectors in a virtual sandbox environment.',
      ],
    },
    {
      week: 'Week 3',
      title: 'Automation & Sensors',
      icon: Settings,
      color: 'bg-emerald-600 shadow-emerald-500/20 ring-emerald-100',
      textColor: 'text-emerald-600',
      bullets: [
        'Learn sensor science: ultrasonic distance sensors, infrared line trackers, and light sensors.',
        'Code autonomous decision-making algorithms (conditional if-else loops).',
        'Hands-on project: Build an obstacle-avoiding smart robot simulation.',
      ],
    },
    {
      week: 'Week 4',
      title: 'Capstone Project & Showcase',
      icon: Flag,
      color: 'bg-rose-600 shadow-rose-500/20 ring-rose-100',
      textColor: 'text-rose-600',
      bullets: [
        'Combine AI classification with robotics automation in a major capstone project.',
        'Fine-tune algorithms, debug error states, and polish project interfaces.',
        'Showcase event: Present final projects to parents, peers, and mentors.',
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white border-y border-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Workshop Curriculum
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            A comprehensive, project-based 4-week learning pathway tailored for young learners.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-32 pl-8 md:pl-16 space-y-12">
          
          {/* Glowing vertical line effect overlay */}
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-secondary to-rose-500 blur-[1px]" />

          {weeks.map((week, index) => {
            const Icon = week.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Timeline Marker (Icon) */}
                <div className={`absolute -left-[43px] md:-left-[75px] top-1 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full ${week.color} text-white shadow-md ring-4 group-hover:scale-105 transition-transform duration-300 z-10`}>
                  <Icon className="h-4.5 w-4.5 md:h-5 md:w-5" />
                </div>

                {/* Left Week Badge (Absolute on Desktop, Block on Mobile) */}
                <div className="md:absolute md:-left-44 md:top-2 mb-3 md:mb-0">
                  <span className={`inline-block font-extrabold text-xs md:text-sm tracking-wider uppercase bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100/80 ${week.textColor}`}>
                    {week.week}
                  </span>
                </div>

                {/* Content Card */}
                <div className="premium-card premium-card-hover rounded-3xl p-8 cursor-default">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-darkText mb-5 tracking-tight">
                    {week.title}
                  </h3>
                  
                  <ul className="space-y-3.5">
                    {week.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-400 text-sm sm:text-base font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-primary" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
