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
    <section id="education" className="py-20 bg-gray-800/100">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800/100 border border-emerald-400/20 rounded-xl p-6 hover:border-emerald-400/100 hover:shadow-lg hover:shadow-emerald-400/20 transition duration-300 transform hover:-translate-y-2 cursor-pointer group fade-in-up text-gray-300"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Header */}
            <div className="relative z-10 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-8 bg-gray-800/100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-800/100 rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold text-accent">{edu.level}</h3>
              </div>
              <p className="text-sm text-gray-400 ml-15">{edu.institution}</p>
            </div>

            {/* Content */}
            <div className="bg-gray-800/100 space-y-3 relative z-10">
              <div className="border-l-2 border-accent/50 pl-4 py-2">
                <p className="text-gray-300 font-semibold">{edu.field}</p>
                <p className="text-sm text-gray-300">{edu.duration}</p>
              </div>

              <div className="bg-[#0d1117]/50 rounded-lg p-3 border border-emerald-400/20">
                <p className="text-accent font-semibold text-sm">{edu.cgpa}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/20 via-emerald-400/100 to-transparent rounded-b-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
