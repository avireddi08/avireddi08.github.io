import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">About Me</h2>
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-emerald-400/20 hover:border-emerald-400/100 transition duration-300 fade-in-up shadow-lg">
          <p className="text-white text-lg leading-relaxed text-center space-y-6">
            I am a Computer Science and Engineering undergraduate with an Honors specialization in AI & Machine Learning from Walchand Institute of Technology, Solapur. I’m passionate about building real-world software solutions by combining full-stack development and machine learning.
            <br /><br />
            I have worked on projects including a real-time online auction platform, an AI-driven telemedicine system, and an AI-powered nutrition tracking application, along with a Flutter-based mobile app. I have a strong foundation in Java and Python, experience with MySQL, Git, and GitHub, and I’m eager to learn and grow as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
