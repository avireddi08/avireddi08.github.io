import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-6 md:px-20">
        {/* Add top padding to offset fixed navbar */}
        <div className="pt-28">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-400 border-t border-gray-700 mt-12">
        &copy; {new Date().getFullYear()} Avishka Reddi | All rights reserved
      </footer>
    </div>
  );
}
