import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: 'Online Auction Platform',
      desc: 'Built a MERN-based online auction platform with real-time bidding, user authentication, centralized database, and auction management features.',
      link: "https://github.com/avireddi08/online-auction-platform"
    },
    {
      name: 'MultiModal-XAI-FakeJobDetector',
      desc: 'An XAI-powered hybrid framework for detecting fake job postings using multimodal data (text, images, audio), providing transparent and interpretable predictions for fraudulent listings.',
      link: "https://github.com/avireddi08/MultiModal-XAI-FakeJobDetector"
    },
    {
      name: 'AI-driven Telemedicine System',
      desc: 'Developed an AI system for automated patient follow-ups, lung cancer severity prediction, and medical summary generation with an interactive dashboard for dataset insights.',
      link: "https://github.com/avireddi08/AI_DRIVEN_TELEMEDICINE_SYSTEM"
    },
    {
      name: 'Nutrivision – AI-Powered Food Classifier & Nutrition Tracker',
      desc: 'Built a transfer learning-based food classifier using MobileNetV2, achieving > 85% accuracy. Integrated a Streamlit UI, food diary, and nutrition tracking system for calories, macros, fiber, sodium, and cholesterol.',
      link: "https://github.com/avireddi08/Nutrivision"
    },
    {
      name: 'Turf Booking Mobile App',
      desc: 'Developed a Flutter app for real-time turf booking with secure authentication, slot management, feedback/reviews, and an admin panel for managing tournaments, users, and payments.',
      link: "https://github.com/avireddi08/TURF_BOOKING_APP"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-accent mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#161b22] p-6 rounded-lg shadow-lg hover:shadow-accent transition transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-accent mb-3">{p.name}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{p.desc}</p>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-accent underline hover:text-accent/80 transition font-medium"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
