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
          console.log(result.text);
          setStatus('Message sent successfully ✅');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Something went wrong ❌');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-accent mb-6 text-center">Contact</h2>
      <p className="text-gray-300 mb-12 text-center max-w-xl">
        I’m always open to discussing new opportunities, collaborations, or projects.
        Please feel free to reach out via email or connect with me on LinkedIn.
      </p>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-accent/90 transition"
        >
          Send Message
        </button>

        {status && <p className="text-gray-300 text-center mt-4">{status}</p>}
      </form>

      {/* Contact Info + Icons */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-6 mt-2">
          <a
            href={"https://www.linkedin.com/in/avireddi08/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={"https://github.com/avireddi08"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
