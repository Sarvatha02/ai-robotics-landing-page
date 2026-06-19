import React from 'react';
import { Brain, Bot, Cpu, Lightbulb, Rocket, Users } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      title: 'Understand AI Fundamentals',
      description: 'Explore the core concepts of Artificial Intelligence, machine learning, and how smart machines think.',
      icon: Brain,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      badgeColor: 'bg-blue-500',
    },
    {
      title: 'Build Robotics Projects',
      description: 'Get hands-on experience designing and programming your very first physical or virtual robot models.',
      icon: Bot,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      badgeColor: 'bg-purple-500',
    },
    {
      title: 'Learn Sensors & Automation',
      description: 'Understand how robots interact with the real world using sonar, light, and touch sensors.',
      icon: Cpu,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      badgeColor: 'bg-emerald-500',
    },
    {
      title: 'Improve Logical Thinking',
      description: 'Boost problem-solving skills by breaking down complex programming challenges into step-by-step algorithms.',
      icon: Lightbulb,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      badgeColor: 'bg-amber-500',
    },
    {
      title: 'Create a Capstone AI Project',
      description: 'Build and showcase a final AI-powered project that demonstrates everything you learned.',
      icon: Rocket,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
      badgeColor: 'bg-rose-500',
    },
    {
      title: 'Teamwork & Presentation',
      description: 'Collaborate with peers on project ideas, improving communication and confidence.',
      icon: Users,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
      badgeColor: 'bg-violet-500',
    },
  ];

  return (
    <section id="outcomes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            What You Will Achieve
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Our curriculum focuses on practical, project-based outcomes that prepare students for the future.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={index} 
                className="premium-card premium-card-hover rounded-3xl p-8 cursor-default group relative overflow-hidden"
              >
                {/* Accent Color Band */}
                <div className={`absolute top-0 left-0 w-full h-[3px] ${outcome.badgeColor}`} />
                
                <div className="flex items-start space-x-5">
                  <div className={`p-3.5 rounded-2xl border ${outcome.color} group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-lg text-darkText group-hover:text-primary transition-colors duration-200">
                      {outcome.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
