// src/app/layout.tsx
import React from 'react';
import '../styles/globals.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Blog Website</title>
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
        <header className="bg-gradient-to-r from-purple-500 via-pink-400 to-red-300 text-white p-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Blog</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-6   rounded-lg mt-4 mb-6">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white p-4 mt-auto">
        <div className="container mx-auto text-center space-y-6">
            <div className="space-x-6">
            <Link href="/" className="hover:underline">Home </Link>
              <Link href="/about" className="hover:underline">About Us </Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
            <div className="mt-4 flex justify-center items-center space-x-6">
              <a href="https://github.com/MrAfoo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/syed-affan-ali" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com/x._affan_.x/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram size={30} />
              </a>
            </div>
          <p className="text-center">&copy; 2024 My Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
