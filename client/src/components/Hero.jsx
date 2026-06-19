import React from 'react';
import { Sparkles, ArrowRight, Play, Award, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-white bg-grid-pattern">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] rounded-full accent-circle-primary -z-10" />
      <div className="absolute bottom-10 right-0 w-[40rem] h-[40rem] rounded-full accent-circle-secondary -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Promo Tag */}
            <div className="inline-flex items-center space-x-2.5 bg-primary/5 border border-primary/10 px-4.5 py-2 rounded-full text-primary text-xs sm:text-sm font-extrabold tracking-wide">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI & Robotics Summer Camp 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-darkText leading-[1.08] tracking-tight">
              Empower Young Innovators: <br />
              <span className="text-gradient">AI & Robotics Summer Workshop</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join our 4-week AI & Robotics Summer Workshop designed for young innovators. 
              Learn Artificial Intelligence, Robotics, Automation, and Problem Solving through fun hands-on projects.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToRegister}
                className="group w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-extrabold px-8 py-4.5 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-103 active:scale-97 transition-all duration-200 text-base flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('curriculum');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-slate-55 hover:bg-slate-100 text-slate-700 hover:text-darkText font-bold px-8 py-4.5 rounded-2xl border border-slate-200/80 shadow-sm hover:scale-103 active:scale-97 transition-all duration-200 text-base cursor-pointer"
              >
                View Curriculum
              </button>
            </div>

          </div>

          {/* Image & Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Backdrop framing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-[48px] transform rotate-2 scale-[1.02] -z-10" />
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-[48px] border border-slate-100 -z-10" />
            
            <img 
              src="/hero_illustration.png" 
              alt="AI & Robotics Workshop" 
              className="w-full max-w-[420px] lg:max-w-full rounded-[38px] shadow-xl border-4 border-white animate-float-slow"
            />
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto text-center">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-primary block tracking-tight">500+</span>
              <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Students Trained</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-secondary block tracking-tight">95%</span>
              <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Parent Satisfaction</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-primary block tracking-tight">20+</span>
              <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Projects Built</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-secondary block tracking-tight">4 Weeks</span>
              <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Live Learning</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
