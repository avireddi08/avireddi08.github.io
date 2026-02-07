import React from 'react';

export default function Education() {
  const educationData = [
    {
      level: '1st Graduation (Bachelor\u2019s Degree)',
      institution: 'Your University Name',
      field: 'Computer Science / Engineering',
      duration: '2020 - 2024',
      cgpa: '8.5 CGPA',
      details: 'Specialized in Full Stack Development, Data Structures, and Algorithms'
    },
    {
      level: '12th Grade (Senior Secondary)',
      institution: 'Your School Name',
      field: 'Science Stream',
      duration: '2018 - 2020',
      cgpa: '95%',
      details: 'Focused on Physics, Chemistry, and Mathematics'
    },
    {
      level: '10th Grade (Secondary)',
      institution: 'Your School Name',
      field: 'General Education',
      duration: '2016 - 2018',
      cgpa: '92%',
      details: 'Comprehensive education in core subjects and languages'
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
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">{index + 1}</span>
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
                <span className="text-accent font-bold text-sm">{index + 1}</span>
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
