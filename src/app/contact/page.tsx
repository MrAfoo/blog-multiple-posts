"use client"
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-2 w-full rounded mb-4"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 w-full rounded mb-4"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="border p-2 w-full rounded mb-4"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
