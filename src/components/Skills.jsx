import React from 'react';

export default function Skills() {
  const technicalSkills = [
    { category: 'Programming Languages', skills: [
      { name: 'Java', level: 'Intermediate'},
      { name: 'Python', level: 'Intermediate'},
      { name: 'C', level: 'Intermediate'}
    ]},
    { category: 'Full Stack Development', skills: [
      { name: 'React.js', level: 'Intermediate'},
      { name: 'Node.js', level: 'Beginner'},
      { name: 'MongoDB', level: 'Intermediate'},
      { name: 'Express.js', level: 'Beginner'},
      { name: 'HTML/CSS/JS', level: 'Intermediate'}
    ]},
    { category: 'AI/ML', skills: [
      { name: 'Machine Learning', level: 'Intermediate'},
      { name: 'Deep Learning', level: 'Beginner'},
      { name: 'TensorFlow', level: 'Beginner'},
      { name: 'PyTorch', level: 'Beginner'}
    ]},
    { category: 'Tools & Platforms', skills: [
      { name: 'Git/GitHub', level: 'Intermediate'},
      { name: 'AWS', level: 'Beginner'}
    ]}
  ];

  const softSkills = [
    { name: 'Time Management'},
    { name: 'Team Collaboration'},
    { name: 'Communication'},
    { name: 'Analytical Thinking'},
    { name: 'Adaptability'}
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Intermediate': return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400';
      case 'Beginner': return 'bg-orange-500/20 border-orange-500/40 text-orange-400';
      default: return 'bg-accent/20 border-accent/40 text-accent';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">Skills & Expertise</h2>

      {/* Technical Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-accent mb-8 text-center slide-in-left">Technical Skills</h3>
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {technicalSkills.map((tech, i) => (
            <div key={i} className="fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h4 className="text-lg font-semibold text-white mb-4 text-center">{tech.category}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {tech.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161b22] border border-accent/30 hover:border-accent/80 transition group">
                    <span className="text-gray-300 font-semibold">{skill.name}</span>
                    <div className="flex items-center gap-1">
                      <span className={`text-xs px-2 py-1 rounded font-bold border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-accent mb-8 text-center slide-in-right">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-lg bg-[#161b22] border border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-300 font-semibold block">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
