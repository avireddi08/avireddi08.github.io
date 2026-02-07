import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">About Me</h2>
        <div className="bg-[#161b22] rounded-2xl p-8 md:p-12 border border-accent/40 hover:border-accent/80 transition-all duration-300 fade-in-up shadow-lg">
          <p className="text-white text-lg leading-relaxed text-center space-y-6">
            I'm an <span className="text-white font-semibold">enthusiastic developer</span> with a strong foundation in software development, specializing in <span className="text-white font-semibold">MERN Stack</span> and <span className="text-white font-semibold">AI/ML technologies</span>.
            <br /><br />
            I love building products that make a <span className="text-white font-semibold">real impact</span> and continuously improving my craft through learning and hands-on experience.
          </p>
        </div>
      </div>
    </section>
  );
}
