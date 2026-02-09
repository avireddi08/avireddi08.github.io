import React, { useState } from 'react';
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
      title: 'Google Cloud Career Launchpad',
      issuer: 'Google Cloud',
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
      title: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'AWS',
      date: 'Issued: Sep 2025',
      certificateUrl: 'https://www.credly.com/earner/earned/badge/9fed0804-6415-4421-b37d-62e160e155dd'
    },
    {
      title: 'AWS Generative AI Practitioner',
      issuer: 'AWS',
      date: 'Issued: Nov 2025',
      certificateUrl: 'https://www.credly.com/earner/earned/badge/e26026ec-128c-462f-b453-24f940765d2b'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  return (
    <section id="certifications" className="py-20 bg-[#0d1117]">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">
        Certifications
      </h2>

      <div className="max-w-5xl mx-auto relative px-4">

        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certifications.map((cert, index) => (
              <div key={index} className="min-w-full">
                <div className="bg-[#161b22] rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400 transition duration-300 text-gray-300 shadow-lg">

                  <h3 className="text-2xl font-bold text-accent mb-3">
                    {cert.title}
                  </h3>

                  <p className="font-semibold mb-1">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-gray-400 mb-6">
                    {cert.date}
                  </p>

                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-emerald-400 text-gray-900 font-semibold rounded-lg hover:scale-105 hover:bg-emerald-300 transition duration-300"
                  >
                    Verify Credential →
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-gray-800 border border-emerald-400 text-emerald-400 p-3 rounded-full hover:scale-110 transition"
        >
          <IoArrowBack size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-gray-800 border border-emerald-400 text-emerald-400 p-3 rounded-full hover:scale-110 transition"
        >
          <IoArrowForward size={22} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-emerald-400 w-8'
                  : 'bg-emerald-400/30 w-3'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
