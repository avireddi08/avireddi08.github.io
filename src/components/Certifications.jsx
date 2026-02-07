import React, { useState } from 'react';
import { FaAws, FaGoogle, FaReact, FaBrain, FaPython } from 'react-icons/fa';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Issued: January 2024',
      credentialId: 'Credential ID: ABC123XYZ',
      description: 'Demonstrates foundational knowledge of AWS services, cloud concepts, and AWS best practices.',
      icon: FaAws,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Google Cloud Associate Cloud Engineer',
      issuer: 'Google Cloud',
      date: 'Issued: March 2024',
      credentialId: 'Credential ID: GCP456DEF',
      description: 'Validates ability to deploy and manage applications on Google Cloud Platform.',
      icon: FaGoogle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Web Development Specialization',
      issuer: 'Coursera (Meta)',
      date: 'Issued: May 2024',
      credentialId: 'Credential ID: META789GHI',
      description: 'Completed comprehensive specialization covering frontend and backend development.',
      icon: FaReact,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera (Andrew Ng)',
      date: 'Issued: July 2024',
      credentialId: 'Credential ID: ML012JKL',
      description: 'Advanced understanding of machine learning algorithms, neural networks, and deep learning.',
      icon: FaBrain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM & DataCamp',
      date: 'Issued: August 2024',
      credentialId: 'Credential ID: PYTHON345MNO',
      description: 'Proficiency in Python, data analysis, visualization, and data manipulation libraries.',
      icon: FaPython,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="py-20 bg-[#0d1117]">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center fade-in-up">Certifications</h2>

      {/* Desktop Carousel */}
      <div className="hidden md:block max-w-5xl mx-auto relative">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {certifications.map((cert, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 fade-in-up">
                <div className="bg-[#161b22] rounded-2xl p-8 border-2 border-accent/30 hover:border-accent transition-all duration-300 text-gray-300">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-gradient-to-br ${cert.color} p-3 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className="text-white text-3xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-accent mb-1">{cert.title}</h3>
                      <p className="text-gray-300 font-semibold text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-3 mb-6 bg-[#0d1117] rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-lg">📅</span>
                      <p className="text-gray-300 font-semibold">{cert.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-lg">🔐</span>
                      <p className="text-gray-300 font-mono text-sm font-bold">{cert.credentialId}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    {cert.description}
                  </p>

                  {/* Verify Button */}
                  <button className="px-6 py-2 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300">
                    Verify Credential →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-accent/20 hover:bg-accent/40 border border-accent text-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110">
          <IoArrowBack size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-accent/20 hover:bg-accent/40 border border-accent text-accent p-3 rounded-full transition-all duration-300 transform hover:scale-110">
          <IoArrowForward size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {certifications.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-8' : 'bg-accent/30 hover:bg-accent/50'}`}></button>
          ))}
        </div>
      </div>

      {/* Mobile View - Grid */}
      <div className="md:hidden grid grid-cols-1 gap-6 max-w-2xl mx-auto px-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-[#161b22] rounded-2xl p-6 border-2 border-accent/30 hover:border-accent transition-all duration-300 fade-in-up text-gray-300">
            <div className="flex items-start gap-4 mb-4">
              <div className={`bg-gradient-to-br ${cert.color} p-3 rounded-lg flex items-center justify-center flex-shrink-0`}>
                <cert.icon className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-accent mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-300 font-semibold">{cert.issuer}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4 text-sm bg-[#0d1117] rounded-lg p-3 border border-accent/20">
              <p className="text-gray-300 font-semibold">{cert.date}</p>
              <p className="text-gray-300 font-mono text-xs font-bold break-all">{cert.credentialId}</p>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {cert.description}
            </p>

            <button className="w-full px-4 py-2 bg-accent text-gray-900 rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold text-sm">
              Verify Credential →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
