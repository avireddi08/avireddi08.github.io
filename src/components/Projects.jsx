import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      name: 'Nutrivision – AI-Powered Food Classifier',
      desc: 'Built a transfer learning-based food classifier using MobileNetV2, achieving > 85% accuracy. Integrated Streamlit UI, food diary, and nutrition tracking for calories, macros, fiber, sodium, and cholesterol.',
      tech: ['Python','NumPy','Matplotlib','TensorFlow','Keras','Streamlit','CalorieNinjas API'],
      link: "https://github.com/avireddi08/Nutrivision"
    },
    {
      name: 'Turf Booking Mobile App',
      desc: 'Developed a Flutter app for real-time turf booking with secure authentication, slot management, feedback/reviews, and an admin panel for managing tournaments, users, and payments.',
      tech: ['Flutter','Dart','Firebase Services','Razorpay API'],
      link: "https://github.com/avireddi08/TURF_BOOKING_APP"
    },
    {
      name: 'MultiModal-XAI-FakeJobDetector',
      desc: 'An XAI-powered hybrid framework for detecting fake job postings using multimodal data (text, images, audio), providing transparent and interpretable predictions for fraudulent listings.',
      tech: ['Python','TensorFlow','Explainable AI','React.js','Java Springboot'],
      link: "https://github.com/avireddi08/MultiModal-XAI-FakeJobDetector"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-[#161b22] to-[#0d1117] p-6 rounded-lg border border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all transform hover:-translate-y-2 flex flex-col justify-between fade-in-up text-gray-300"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-accent mb-3">{p.name}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{p.desc}</p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full border border-accent/40 hover:bg-accent/30 transition">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/40 text-accent font-semibold rounded-lg transition-all border border-accent/50 hover:border-accent group"
            >
              <FaGithub className="group-hover:scale-110 transition" />
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
