import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Outcomes from './components/Outcomes';
import Curriculum from './components/Curriculum';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-lightBg font-sans">
      <Navbar />
      <main>
        <Hero />
        <Details />
        <Outcomes />
        <Curriculum />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
