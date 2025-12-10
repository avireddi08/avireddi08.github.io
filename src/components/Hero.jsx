import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import placeholder from '../assets/headshot-placeholder.png';

export default function Hero() {
  return (
    <section
    id="hero"
    className="flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 px-4 md:px-16 bg-[#0f172a]">

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{' '}
          <span className="text-accent bg-gradient-to-r from-accent to-indigo-500 bg-clip-text text-transparent">
            Avishka Reddi
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
          A passionate Software Developer specializing in <span className="text-accent font-semibold">Full Stack Development</span> and <span className="text-accent font-semibold">AI/ML</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          {/* Resume Button */}
          <motion.a
            href="/Avishka_Reddi_Resume.pdf"
            download="Avishka_Reddi_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-accent px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:bg-accent/90 transition"
          >
            <FaDownload /> Resume
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 border border-accent px-6 py-3 rounded-lg text-accent font-medium hover:bg-accent hover:text-gray-900 transition"
          >
            <FaEnvelope /> Contact
          </motion.a>
        </div>
      </motion.div>

      {/* Headshot */}
      <motion.img
        src={placeholder}
        alt="Headshot"
        className="w-60 h-60 md:w-72 md:h-72 rounded-full mt-10 md:mt-0 border-4 border-accent shadow-2xl object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
}
