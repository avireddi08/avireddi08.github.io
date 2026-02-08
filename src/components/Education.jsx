import React from 'react';

export default function Education() {
  const educationData = [
    {
      level: 'B.Tech.',
      institution: 'Walchand Institute Of Technology, Solapur',
      field: 'Computer Science & Engineering',
      duration: '2022 - 2026',
      cgpa: '9.76 CGPA',
      details: 'Honors in AI/ML'
    },
    {
      level: 'HSC',
      institution: 'D.H.B. Soni College, Solapur',
      duration: '2021 - 2022',
      cgpa: '85%',
    },
    {
      level: 'SSC',
      institution: 'Jnana Prabodhini Prashala, Solapur',
      duration: '2019 - 2020',
      cgpa: '96.40%',
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#161b22] border border-accent/30 rounded-xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group fade-in-up text-gray-300"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Header */}
            <div className="relative z-10 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold text-accent">{edu.level}</h3>
              </div>
              <p className="text-sm text-gray-400 ml-15">{edu.institution}</p>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <div className="border-l-2 border-accent/50 pl-4 py-2">
                <p className="text-gray-300 font-semibold">{edu.field}</p>
                <p className="text-sm text-gray-400">{edu.duration}</p>
              </div>

              <div className="bg-[#0d1117]/50 rounded-lg p-3 border border-accent/20">
                <p className="text-accent font-semibold text-sm">{edu.cgpa}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-b-xl"></div>
          </div>
        ))}
      </div>

      {/* Timeline View for Mobile */}
      <div className="md:hidden mt-8">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/30"></div>

          {/* Timeline Items */}
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 ml-20">
              <div className="absolute left-0 w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              </div>
              <div className="bg-[#161b22] border border-accent/40 rounded-lg p-4">
                <h4 className="text-accent font-bold mb-1">{edu.level}</h4>
                <p className="text-sm text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-gray-300 text-sm mb-1">{edu.field}</p>
                <p className="text-xs text-gray-500 mb-2">{edu.duration}</p>
                <p className="text-accent text-sm font-semibold">{edu.cgpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
