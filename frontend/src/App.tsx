import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Details from './components/Details.tsx';
import Outcomes from './components/Outcomes.tsx';
import FAQ from './components/FAQ.tsx';
import RegisterForm from './components/RegisterForm.tsx';
import Footer from './components/Footer.tsx';

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-light-bg text-slate-700 flex flex-col antialiased selection:bg-orange-500 selection:text-white">
      {/* Sticky Translucent Header */}
      <Navbar />
      
      {/* Main Container */}
      <main className="flex-grow">
        {/* Landing Sections */}
        <Hero />
        <Details />
        <Outcomes />
        <FAQ />
        <RegisterForm />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}

export default App;
