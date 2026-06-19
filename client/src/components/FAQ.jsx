import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is prior experience required?',
      answer: 'No, prior coding or robotics experience is not required. Our workshop starts from the absolute fundamentals of block coding and logic building, making it perfect for beginners.',
    },
    {
      question: 'Are recordings provided?',
      answer: 'Yes! All live sessions are recorded and made available on the student dashboard within 24 hours of the class. If a student misses a session, they can catch up easily.',
    },
    {
      question: 'Will students receive certificates?',
      answer: 'Absolutely. Upon successful completion of all weekly projects and the final capstone presentation, students will receive an official digital certificate of accomplishment.',
    },
    {
      question: 'What software and hardware is needed?',
      answer: 'No hardware purchase is required. All projects are built in interactive virtual simulator environments. Students only need a modern computer (Windows/Mac/Chromebook) with a functional webcam and a stable internet connection.',
    },
    {
      question: 'Are projects included?',
      answer: 'Yes, this is a 100% project-based workshop. Students build multiple micro-projects throughout the weeks (including image recognition classifiers and simulated obstacle-avoiding cars) culminating in a final capstone showcase.',
    },
  ];

  const toggleFAQ = (idx) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/50 border-t border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Got questions? We have answers. Find everything you need to know about the summer cohort here.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-primary ring-2 ring-primary/5' : 'border-slate-150/70 hover:border-slate-350'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-slate-400'}`} />
                    <span className="font-extrabold text-darkText text-base sm:text-lg tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>

                {/* Accordion Answer Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-slate-400 text-sm sm:text-base font-semibold leading-relaxed bg-slate-50/30">
                    {faq.answer}
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
