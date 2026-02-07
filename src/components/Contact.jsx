import React, { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        "service_32d5xkn", 
        "template_taojmw6",
        form.current,
        "AwYeQqC5UV9Fd-Ja-"
      )
      .then(
        (result) => {
          setStatus('Message sent successfully ✅');
          e.target.reset();
        },
        (error) => {
          setStatus('Something went wrong ❌');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8 text-center fade-in-up">Contact</h2>
      <p className="text-gray-300 mb-12 text-center max-w-xl fade-in-up text-lg leading-relaxed">
        I’m always open to discussing new opportunities, collaborations, or projects.
        Please feel free to reach out via email or connect with me on LinkedIn.
      </p>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md flex flex-col gap-4 bg-[#161b22] p-8 rounded-2xl border-2 border-accent/30 hover:border-accent transition-all duration-300 fade-in-up shadow-lg"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-[#0d1117] border border-accent/30 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-[#0d1117] border border-accent/30 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-[#0d1117] border border-accent/30 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-accent hover:bg-accent/90 text-gray-900 font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 active:translate-y-0"
        >
          Send Message
        </button>

        {status && <p className="text-accent text-center mt-4">{status}</p>}
      </form>

      {/* Contact Info + Icons */}
      <div className="flex flex-col items-center gap-6 mt-10 fade-in-up">
        <p className="text-gray-400 text-sm">Connect with me on social media</p>
        <div className="flex items-center gap-8">
          <a
            href={"https://www.linkedin.com/in/avireddi08/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition transform hover:scale-125 hover:-translate-y-1 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={"https://github.com/avireddi08"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition transform hover:scale-125 hover:-translate-y-1 text-3xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
