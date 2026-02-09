import React, { useState } from 'react';
import { FaAws, FaGoogle, FaReact, FaBrain, FaPython } from 'react-icons/fa';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: 'AI Primer Certification',
      issuer: 'Infosys Springboard',
      date: 'Issued: Mar 2024',
      certificateUrl: 'https://drive.google.com/file/d/13l0ocuCkbwJ_FInMbrSnUjme9PGe71YE/view?usp=sharing'
    },
    {
      title: 'Principles of Generative AI',
      issuer: 'Infosys Springboard',
      date: 'Issued: Aug 2024',
      certificateUrl: 'https://drive.google.com/file/d/1hUG_kOf0pHIphPCuZYndJrb-qvTDKlVW/view?usp=sharing'
    },
    {
      title: 'Google Cloud Career Launchpad (CloudEngineer Track) Certification',
      issuer: 'Google Cloud Career',
      date: 'Issued: Sep 2024',
      certificateUrl: 'https://drive.google.com/file/d/1P52hNSAIednFMDqIBBT9WTTu951Bf8JU/view?usp=sharing'
    },
     {
      title: 'Agile Scrum Certification',
      issuer: 'Infosys Springboard',
      date: 'Issued: Apr 2025',
      certificateUrl: 'https://drive.google.com/file/d/1sOgmQ82GipOYn-vwqNkxW6bdbvDVgmnx/view?usp=sharing'
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner - Training Badge',
      issuer: 'AWS',
      date: 'Issued: Sep 2025',
      certificateUrl: 'https://www.credly.com/earner/earned/badge/9fed0804-6415-4421-b37d-62e160e155dd'
    },
    {
      title: 'AWS Cloud Quest: Generative AI Practitioner - Training Badge',
      issuer: 'AWS',
      date: 'Issued: Nov 2025',
      certificateUrl: 'https://www.credly.com/earner/earned/badge/e26026ec-128c-462f-b453-24f940765d2b'
    },
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
                <div className="bg-gray-800 rounded-2xl p-8 border-2 border-emerald-400/20 hover:border-accent transition duration-300 text-gray-300">
                  {/* Title and Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">{cert.title}</h3>
                    <p className="text-gray-300 font-semibold text-sm mb-3">{cert.issuer}</p>
                    <div className="flex items-center">
                      <p className="text-gray-300 font-semibold">{cert.date}</p>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent/90 transition hover:scale-105 duration-300">
                    Verify Credential →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-gray-800 border border-accent text-accent p-3 rounded-full transition duration-300 transform hover:scale-110">
          <IoArrowBack size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-gray-800 border border-accent text-accent p-3 rounded-full transition duration-300 transform hover:scale-110">
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
            <h3 className="text-lg font-bold text-accent mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-300 font-semibold mb-3">{cert.issuer}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-lg"></span>
              <p className="text-gray-300 font-semibold text-sm">{cert.date}</p>
            </div>
            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="w-full block text-center px-4 py-2 bg-accent text-gray-900 rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold text-sm">
              Verify Credential →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
