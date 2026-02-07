import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Separator from './components/Separator';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Add top padding to offset fixed navbar */}
        <div className="pt-28 px-6 md:px-20">
          <Hero />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <About />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <Skills />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <Education />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <Internships />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <Projects />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <Certifications />
        </div>
        <Separator />
        <div className="px-6 md:px-20">
          <Contact />
        </div>
      </main>
      <footer className="py-6 text-center text-gray-400 border-t border-gray-700 mt-12 bg-gray-900">
        &copy; {new Date().getFullYear()} Avishka Reddi | All rights reserved
      </footer>
    </div>
  );
}
