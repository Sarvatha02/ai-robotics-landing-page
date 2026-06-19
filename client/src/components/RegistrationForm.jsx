import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { submitEnquiry } from '../services/api';

export default function RegistrationForm() {
  const [isSubmitSuccessfulState, setIsSubmitSuccessfulState] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      const response = await submitEnquiry(data);
      if (response.success) {
        setIsSubmitSuccessfulState(true);
        reset();
      } else {
        setSubmitError(response.message || 'Registration failed.');
      }
    } catch (err) {
      setSubmitError(err.message || 'Server error. Please try again later.');
    }
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-1/4 w-[25rem] h-[25rem] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Panel (Value Props) */}
          <div id="contact" className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pr-6">
            <div className="space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-secondary-light text-xs sm:text-sm font-extrabold">
                <Sparkles className="h-4 w-4" />
                <span>Scholarships Available!</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Secure Your Child’s Seat Today
              </h2>
              
              <p className="text-slate-350 text-sm sm:text-base font-semibold leading-relaxed">
                Fill out the registration details to request admission. Our batch sizes are strictly capped at 12 students to guarantee personal guidance.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 text-primary-light p-3 rounded-2xl border border-white/10 shrink-0">
                    <ShieldCheck className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base">Secure Admission Enquiry</h4>
                    <p className="text-slate-400 text-xs mt-0.5 font-semibold">Your phone and email are encrypted and never shared with third parties.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Cohort Summary Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 relative overflow-hidden">
              <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">Cohort Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-400 text-xs font-semibold block">Program Fee</span>
                  <span className="font-black text-white text-2xl tracking-tight">₹2,999</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs font-semibold block">Start Date</span>
                  <span className="font-black text-white text-base block mt-1 tracking-tight">15 July 2026</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel (Form Card) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/20 shadow-2xl relative text-darkText">
              
              {/* Success View */}
              {isSubmitSuccessfulState ? (
                <div className="text-center py-10 space-y-6 animate-fade-in">
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-55 text-emerald-600 shadow-lg shadow-emerald-100 ring-8 ring-emerald-50">
                    <CheckCircle2 className="h-16 w-16" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-darkText tracking-tight">Registration Submitted!</h3>
                    <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base font-semibold leading-relaxed">
                      Thank you for choosing Kidrove Workshop. Our admissions advisor will contact you within the next 24 hours via phone or email to complete the enrollment process.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitSuccessfulState(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold px-8 py-3 rounded-xl transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-slate-700 text-sm font-bold">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 rounded-xl border outline-none bg-slate-50 text-slate-800 focus:bg-white focus:ring-4 transition-all duration-200 ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-100 focus:border-red-500'
                          : 'border-slate-200 focus:ring-primary/10 focus:border-primary'
                      }`}
                      {...register('name', {
                        required: 'Full name is required',
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters',
                        },
                      })}
                    />
                    {errors.name && (
                      <div className="flex items-center space-x-1.5 text-red-500 text-xs mt-1 font-semibold">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.name.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-slate-700 text-sm font-bold">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 rounded-xl border outline-none bg-slate-50 text-slate-800 focus:bg-white focus:ring-4 transition-all duration-200 ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-100 focus:border-red-500'
                          : 'border-slate-200 focus:ring-primary/10 focus:border-primary'
                      }`}
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-1.5 text-red-500 text-xs mt-1 font-semibold">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.email.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-slate-700 text-sm font-bold">
                      Phone Number (10 digits)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 rounded-xl border outline-none bg-slate-50 text-slate-800 focus:bg-white focus:ring-4 transition-all duration-200 ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-100 focus:border-red-500'
                          : 'border-slate-200 focus:ring-primary/10 focus:border-primary'
                      }`}
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit phone number',
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="flex items-center space-x-1.5 text-red-500 text-xs mt-1 font-semibold">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.phone.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Global error banner */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start space-x-2.5">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-105 active:brightness-95 text-white font-extrabold py-4 rounded-xl shadow-xl shadow-primary/15 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-101 active:scale-99 transition-all text-base flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Submitting enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Admissions Callback</span>
                        <Check className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 font-semibold mt-2">
                    By submitting, you agree to receive program-related callbacks.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
