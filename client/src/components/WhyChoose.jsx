import React from 'react';
import { Video, UserCheck, Code, Award, Users2, HelpCircle } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    {
      title: 'Live Interactive Classes',
      description: 'Not recorded tutorials. Real-time video lectures where students actively participate and ask questions.',
      icon: Video,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Industry Mentors',
      description: 'Learn from experienced software engineers and robotics educators who make complex concepts child-friendly.',
      icon: UserCheck,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Project-Based Learning',
      description: 'Build portfolio-worthy AI classifiers, sensor simulations, and autonomous agents in every single class.',
      icon: Code,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Certificate of Completion',
      description: 'Receive an official, verifiable AI & Robotics Summer Workshop certificate showing your child’s achievements.',
      icon: Award,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Small Batch Size',
      description: 'Maximum of 10-12 students per batch. Ensures personal attention, code-reviews, and individual feedback.',
      icon: Users2,
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Doubt Support',
      description: 'Dedicated discord workspace and session office hours to assist with programming bugs outside of class hours.',
      icon: HelpCircle,
      gradient: 'from-indigo-500 to-cyan-500',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Why Choose This Workshop?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            We provide a premium educational experience built on live engagement, support, and portfolio creation.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="premium-card premium-card-hover rounded-3xl p-8 cursor-default flex flex-col items-start space-y-5"
              >
                {/* Gradient Icon Backdrop */}
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${point.gradient} text-white shadow-md shadow-slate-200/50 shrink-0`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg text-darkText">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                    {point.description}
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
