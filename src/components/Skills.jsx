import React from 'react';

export default function Skills() {
  const technicalSkills = [
    { category: 'Programming Languages', skills: ['C', 'Python', 'Java'] },
    { category: 'Full Stack Development', skills: ['MERN Stack','HTML', 'CSS', 'JavaScript'] },
    { category: 'AI/ML Expertise', skills: ['Machine Learning', 'Deep Learning', 'Model Development'] },
    { category: 'Database Management', skills: ['MySQL'] },
    { category: 'Development Tools', skills: ['Git', 'GitHub'] }
  ];

  const softSkills = ['Time Management', 'Teamwork', 'Adaptability', 'Analytical Thinking', 'Communication'];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <h2 className="text-3xl font-bold text-accent mb-12 text-center">Skills</h2>

      {/* Technical Skills */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-accent mb-6 text-center">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {technicalSkills.map((tech, i) => (
            <div
              key={i}
              className="bg-[#161b22] px-4 py-3 rounded-lg border border-accent text-gray-300 text-sm hover:shadow-lg hover:border-accent/70 transition duration-300 transform hover:-translate-y-1"
            >
              <span className="font-semibold text-accent">{tech.category}:</span> {tech.skills.join(', ')}
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-semibold text-accent mb-6 text-center">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#161b22] px-4 py-3 rounded-lg border border-accent text-gray-300 text-sm hover:shadow-lg hover:border-accent/70 transition duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
