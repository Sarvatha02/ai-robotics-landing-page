import React from 'react';
import { Users, Calendar, Video, Landmark, Hourglass } from 'lucide-react';

export default function Details() {
  const detailsList = [
    {
      id: 'age',
      label: 'Age Group',
      value: '8–14 Years',
      description: 'Ideal for young tech enthusiasts',
      icon: Users,
      color: 'text-blue-600 bg-blue-50 border-blue-100/60',
    },
    {
      id: 'duration',
      label: 'Duration',
      value: '4 Weeks',
      description: 'Engaging weekend & weekday batches',
      icon: Hourglass,
      color: 'text-purple-600 bg-purple-50 border-purple-100/60',
    },
    {
      id: 'mode',
      label: 'Learning Mode',
      value: '100% Online',
      description: 'Live interactive virtual classes',
      icon: Video,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100/60',
    },
    {
      id: 'fee',
      label: 'Workshop Fee',
      value: '₹2,999',
      description: 'All-inclusive learning materials',
      icon: Landmark,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100/60',
    },
    {
      id: 'start',
      label: 'Start Date',
      value: '15 July 2026',
      description: 'Registrations closing soon!',
      icon: Calendar,
      color: 'text-rose-600 bg-rose-50 border-rose-100/60',
    },
  ];

  return (
    <section id="details" className="py-20 bg-gradient-to-b from-blue-50/40 via-sky-50/20 to-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Workshop Information
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Quick facts about our summer cohort. Everything you need to know to get started.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {detailsList.map((detail) => {
            const IconComponent = detail.icon;
            return (
              <div 
                key={detail.id} 
                className="premium-card premium-card-hover rounded-3xl p-6 flex flex-col items-center text-center cursor-default"
              >
                <div className={`p-4 rounded-2xl border ${detail.color} transition-transform duration-300 mb-5 shadow-sm`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-slate-400 font-extrabold text-xs tracking-wider uppercase mb-1.5">
                  {detail.label}
                </h3>
                <p className="text-darkText font-black text-xl mb-1.5 tracking-tight">
                  {detail.value}
                </p>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  {detail.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
