import React from "react";

interface ProfileProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  skillRef: React.RefObject<HTMLDivElement | null>;
}

export const Profile = ({
  scrollToSection,
  // experienceRef,
  projectsRef,
  contactRef,
  // skillRef,
}: ProfileProps) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-7xl font-bold text-blue-600 mb-6">Muskan</h1>
      <h2 className="text-4xl font-bold text-blue-500 mb-5">MERN Stack Developer</h2>
      <p className="text-xl text-gray-800 mb-8">
        Building exceptional digital experiences with modern web technologies
      </p>

      {/* Buttons scroll to respective sections */}
      <button
        onClick={() => scrollToSection(contactRef)} // Let's talk -> Contact
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-2xl mr-5"
      >
        Let's talk
      </button>

      <button
        onClick={() => scrollToSection(projectsRef)} // View Work -> Projects
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-2xl"
      >
        View Work
      </button>
    </div>
  );
};