import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-teal-400 mb-6">Contact Me</h2>
      <form className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        ></textarea>
        <button className="w-full py-3 bg-teal-500 text-black rounded-lg font-semibold hover:bg-teal-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
