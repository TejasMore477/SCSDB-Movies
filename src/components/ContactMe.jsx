import React from "react";
import { Link } from "react-router-dom";

function ContactMe() {
  return (
    <div className="w-full min-h-screen p-5 relative">
      {/* Navigation */}
      <div className="flex items-center gap-5 text-2xl">
        <Link to={"/"}>
          <i className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"></i>
        </Link>
        <h1 className="text-zinc-400 font-semibold md:text-xl text-lg">
          Contact Me
        </h1>
        <Link to={"/"}>
          <i className="text-zinc-300 md:text-xl text-lg ri-home-3-line"></i>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto mt-10">
        {/* Profile Section */}
        <div className="bg-zinc-900 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#6556CD]">
              <img
                src="https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Tejas More</h2>
              <p className="text-zinc-400">
                Third Year Computer Science Student
              </p>
              <p className="text-zinc-400 mt-1">
                Passionate about Web Development
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-zinc-900 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#6556CD] mb-4">
            About Me
          </h3>
          <p className="text-zinc-300 leading-relaxed">
            I'm a third-year Computer Science student passionate about web
            development. Currently, I'm focusing on
            building modern web applications. I love solving complex problems and creating user-friendly
            interfaces that make a difference.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-zinc-900 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#6556CD] mb-4">
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:tejasmore477@gmail.com"
              className="flex items-center gap-3 text-zinc-300 hover:text-[#6556CD] transition-colors"
            >
              <i className="ri-mail-line text-xl"></i>
              <span>tejasmore477@gmail.com</span>
            </a>
            <a
              href="https://github.com/TejasMore477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 hover:text-[#6556CD] transition-colors"
            >
              <i className="ri-github-line text-xl"></i>
              <span>github.com/TejasMore477</span>
            </a>
            <a
              href="https://linkedin.com/in/TejasMore477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 hover:text-[#6556CD] transition-colors"
            >
              <i className="ri-linkedin-line text-xl"></i>
              <span>linkedin.com/in/TejasMore477</span>
            </a>

          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-zinc-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#6556CD] mb-4">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "React",
              "HTML/CSS",
              "Tailwind CSS",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
