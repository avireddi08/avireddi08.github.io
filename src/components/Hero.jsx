import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import placeholder from '../assets/headshot-placeholder.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row gap-12 md:gap-0 items-center justify-between pt-12 pb-20 md:py-32 px-4 md:px-16 bg-gray-900 relative overflow-hidden"
    >
      
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-10"></div>

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
          
          <motion.a
            href="/Avishka_Reddi_Resume.pdf"
            download="Avishka_Reddi_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 px-8 py-3 rounded-lg text-gray-900 font-bold transition"
          >
            <FaDownload /> Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 border-2 border-accent px-8 py-3 rounded-lg text-accent font-bold hover:bg-accent/5 transition"
          >
            <FaEnvelope /> Contact Me
          </motion.a>

        </div>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center items-center relative z-10"
      >
        
        {/* Soft Glow */}
        <div className="absolute w-80 h-96 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 blur-2xl opacity-30"></div>

        {/* 5px Gradient Border */}
<div className="relative p-[5px] rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
  
 
 <div className="w-72 aspect-[3/4] rounded-3xl overflow-hidden">
  <img
    src={placeholder}
    alt="Headshot"
    className="w-full h-full object-cover object-center"
  />
</div>


</div>



      </motion.div>
    </section>
  );
}
