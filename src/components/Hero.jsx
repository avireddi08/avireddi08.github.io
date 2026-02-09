import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import placeholder from '../assets/headshot-placeholder.png';

export default function Hero() {
  return (
    <section
    id="hero"
    className="flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 px-4 md:px-16 bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-10"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left relative z-10"
      >

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
          Hi, I'm{' '}
          <span className="text-accent">Avishka Reddi</span>
        </h1>
        
        <h2 className="text-lg md:text-xl text-accent mb-6 font-semibold">
          Software Developer | Full Stack & AI/ML Enthusiast
        </h2>
        
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
          A highly motivated and organized individual seeking an entry level
          role to apply my skills in building innovative, scalable,
          and cost-effective technology solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
          {/* Resume Button */}
          <motion.a
            href="/Avishka_Reddi_Resume.pdf"
            download="Avishka_Reddi_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 px-8 py-3 rounded-lg text-gray-900 font-bold shadow-lg transition"
          >
            <FaDownload /> Download Resume
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 border-2 border-accent px-8 py-3 rounded-lg text-accent font-bold hover:bg-emerald-400/5 transition"
          >
            <FaEnvelope /> Get in Touch
          </motion.a>
        </div>


      </motion.div>

      {/* Headshot Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1 flex justify-center items-center relative z-10 mt-10 md:mt-0"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br rounded-3xl blur-2xl"></div>
        
        {/* Main Image Container */}
        <div className="relative">
          {/* Decorative Frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/30 to-emerald-400/10 rounded-3xl"></div>
          
          {/* Image */}
          <img
            src={placeholder}
            alt="Headshot"
            className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl object-cover shadow-2xl border-2 border-emerald-400/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
