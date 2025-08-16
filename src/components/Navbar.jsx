import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 text-white px-8 py-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-2xl font-bold text-teal-400">Manish.</h1>
      <ul className="flex space-x-8 font-medium">
        <li><a href="#home" className="hover:text-teal-400">Home</a></li>
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>
    </nav>
  );
}
