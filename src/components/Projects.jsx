import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-teal-400 mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-400">A cool web app built with React.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-400">A landing page design for a startup.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p className="text-gray-400">A full-stack website with Django + React.</p>
        </div>
      </div>
    </div>
  );
}
