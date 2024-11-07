// src/app/contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <form>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
