import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent of 10-year-old Kabir',
      feedback: 'My son built a virtual line-following robot in week 3! The mentors were incredibly patient and explained complex concepts through block programming in a way that made it super fun. Highly recommended!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Priya',
    },
    {
      name: 'Aarav Mehta',
      role: 'Student, 12 Years Old',
      feedback: 'I loved training the AI image classifier to recognize my pet dog! It was like magic. Coding the autonomous obstacle avoidance was tricky but the doubt support team helped me debug my code.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Aarav',
    },
    {
      name: 'Dr. Sandeep K.',
      role: 'Parent of 13-year-old Ananya',
      feedback: 'Excellent curriculum. It is highly structured, and the capstone project presentation boosted my daughter’s confidence immensely. The small batch size meant she got personal attention whenever she was stuck.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sandeep',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Loved by Parents & Students
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Hear from families who participated in our previous robotics and artificial intelligence cohorts.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="premium-card premium-card-hover rounded-3xl p-8 cursor-default relative flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div className="space-y-5">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed italic font-semibold">
                  "{t.feedback}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-slate-100">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 p-1 shrink-0"
                />
                <div>
                  <h4 className="font-extrabold text-darkText text-base">
                    {t.name}
                  </h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
