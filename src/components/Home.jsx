import React from "react";
import MANISH from "../assets/MANISH.jpeg";
import { Home, User, FileText, Settings } from "lucide-react";

export default function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* Left - Profile Image */}
        <div className="relative flex justify-center">
          <div className="bg-teal-400 absolute top-0 left-0 w-32 h-32 -z-10"></div>
          <img
            src={MANISH}// replace with your image path
            alt="Profile"
            className="rounded-xl shadow-lg max-h-[450px] object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Hi, all I'm <span className="text-teal-400">Manish Singh Chauhan</span>
          </h1>
          <h2 className="text-xl font-semibold">
            Software Engineer
          </h2>
          <p className="text-gray-300 leading-relaxed">
           Hi, I’m <span className="text-teal-400">Manish Singh Chauhan</span>, a Junior Java Developer with a strong foundation in Core Java, OOP, Data Structures, and SQL. I enjoy building efficient backend systems, writing clean code, and solving complex problems. I am eager to contribute to real-world projects while continuously learning and growing in software development.
          </p>
          <button className="px-6 py-2 bg-teal-500 text-black rounded-full font-semibold hover:bg-teal-600 transition">
            Hire Me
          </button>
        </div>
      </div>

      {/* Floating Sidebar */}
      <div className="fixed top-1/3 right-6 flex flex-col gap-4">
        <button className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition">
          <Home size={20} />
        </button>
        <button className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition">
          <User size={20} />
        </button>
        <button className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition">
          <FileText size={20} />
        </button>
        <button className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}
