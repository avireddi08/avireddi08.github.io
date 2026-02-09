import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Internships() {
  const experiences = [
    {
      title: 'Full Stack Development Intern',
      company: 'Edunet Foundation',
      duration: 'Feb 2025 - Mar 2025',
      location: 'Remote',
      description: 'Built a MERN-based online auction platform with real time bidding, user authentication, centralized database, and auction management features.',
      tech: ['MongoDB','Express.js','React.js','Node.js','JWT, bcrypt','Socket.IO'],
      link: 'https://github.com/avireddi08/online-auction-platform'
    },
    {
      title: 'AI/ML Intern',
      company: 'Infosys Springboard',
      duration: 'Nov 2024 - Jan 2025',
      location: 'Remote',
      description: 'Developed an AI-driven telemedicine system with automated patient follow-ups, lung cancer severity prediction, and medical summary generation. Created an interactive dashboard to provide dataset insights and improve decision-making.',
      tech: ['Python','NumPy','Matplotlib','Scikit-learn (KNN, RandomForest)','NLP','Streamlit','Cal.com API'],
      link: 'https://github.com/avireddi08/AI_DRIVEN_TELEMEDICINE_SYSTEM'
    },
    {
      title: 'Java Developer Intern',
      company: 'CodSoft',
      duration: 'Mar 2024 - Apr 2024',
      location: 'Remote',
      description: 'Implemented Java projects, including an ATM simulator, number guessing game, and student record system.',
      tech: ['Java'],
      link: 'https://github.com/avireddi08/CODSOFT'
    }
  ];

  return (
    <section id="internships" className="py-20 bg-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">
        Internships
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-[#161b22] to-[#0d1117] p-6 rounded-lg border border-emerald-400/35 hover:border-emerald-400/100 hover:shadow-lg hover:shadow-emerald-400/20 transition transform hover:-translate-y-2 flex flex-col justify-between fade-in-up text-gray-300"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-accent mb-1">{exp.title}</h3>
              <p className="text-white font-semibold text-sm mb-2">{exp.company}</p>
              <div className="flex flex-col gap-1 text-xs text-gray-400 mb-4">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm">{exp.description}</p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-semibold bg-gray-800/`00 text-accent rounded-full border border-accent/40 hover:bg-emerald-400/5 transition">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/5 hover:bg-emerald-400/20 scale-105 text-accent font-semibold rounded-lg transition border border-emerald-400/20 hover:border-emerald-400/100 group"
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
