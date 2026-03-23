
// import { useRef } from "react";
// import { Profile } from "../components/Profile";
// import { AboutMe } from "../components/AboutMe";
// import { Experience } from "../components/Experience";
// import { Projects } from "../components/Projects";
// import { ContactMe } from "../components/ContactME";
// import { NavBar } from "../components/NavBar";
// import { Skills } from "../components/Skills";
// import ParticleBackground from "../components/Particles";

import { AboutMe } from "../components/AboutMe";
import { ContactMe } from "../components/ContactME";
import { Experience } from "../components/Experience";
import { NavBar } from "../components/NavBar";
import ParticleBackground from "../components/Particles";
import { Profile } from "../components/Profile";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

// export const Home = () => {
//   const aboutRef = useRef<HTMLDivElement | null>(null);
//   const experienceRef = useRef<HTMLDivElement | null>(null);
//   const projectsRef = useRef<HTMLDivElement | null>(null);
//   const contactRef = useRef<HTMLDivElement | null>(null);
//   const skillRef = useRef<HTMLDivElement | null>(null);

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="relative min-h-screen">

//       {/* 🌈 Gradient Background */}
//       <div className="absolute inset-0 -z-30 bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-300" />

//       {/* 🔥 Animated Blobs */}
//       <div className="absolute inset-0 -z-20 pointer-events-none">
//         <div
//           className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-5 left-2 sm:left-10"
//           style={{ animation: "blob 8s infinite ease-in-out" }}
//         />
//         <div
//           className="absolutew-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-yellow-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-20 right-2 sm:right-10"
//           style={{ animation: "blob 8s infinite ease-in-out", animationDelay: "2s" }}
//         />
//         <div
//           className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-400 rounded-full blur-3xl opacity-60 mix-blend-multiply bottom-5 left-1/3 sm:left-1/2"
//           style={{ animation: "blob 8s infinite ease-in-out", animationDelay: "4s" }}
//         />
//       </div>

//       {/* ✨ PARTICLES BACKGROUND */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <ParticleBackground />
//       </div>

//       {/* ✅ Content Layer */}
//       <div className="relative z-10 pt-5 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
//         <NavBar
//           scrollToSection={scrollToSection}
//           refs={{ aboutRef, experienceRef, projectsRef, contactRef, skillRef }}
//         />
//         <Profile
//           scrollToSection={scrollToSection}
//           experienceRef={experienceRef}
//           projectsRef={projectsRef}
//           contactRef={contactRef}
//           skillRef={skillRef}
//         />
//         <div ref={aboutRef} className="mt-16 md:mt-24"><AboutMe /></div>
//         <div ref={experienceRef} className="mt-16 md:mt-24"><Experience /></div>
//         <div ref={projectsRef} className="mt-16 md:mt-24"><Projects /></div>
//         <div ref={skillRef} className="mt-16 md:mt-24"><Skills /></div>
//         <div ref={contactRef} className="mt-16 md:mt-24"><ContactMe /></div>
//       </div>

//     </div>
//   );
// };

import { useRef } from "react";

export const Home = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">

      {/* 🌈 Gradient Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-300" />

      {/* 🔥 Animated Blobs */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div
          className="absolute w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-5 left-2 sm:left-10"
          style={{ animation: "blob 8s infinite ease-in-out" }}
        />
        <div
          className="absolute w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-yellow-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-20 right-2 sm:right-10"
          style={{ animation: "blob 8s infinite ease-in-out", animationDelay: "2s" }}
        />
        <div
          className="absolute w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-400 rounded-full blur-3xl opacity-60 mix-blend-multiply bottom-5 left-1/3 sm:left-1/2"
          style={{ animation: "blob 8s infinite ease-in-out", animationDelay: "4s" }}
        />
      </div>

      {/* ✨ PARTICLES BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* ✅ Content Layer */}
      <div className="relative z-10 pt-5 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <NavBar
          scrollToSection={scrollToSection}
          refs={{ aboutRef, experienceRef, projectsRef, contactRef, skillRef }}
        />
        <Profile
          scrollToSection={scrollToSection}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          skillRef={skillRef}
        />
        <div ref={aboutRef} className="mt-12 md:mt-24"><AboutMe /></div>
        <div ref={experienceRef} className="mt-12 md:mt-24"><Experience /></div>
        <div ref={projectsRef} className="mt-12 md:mt-24"><Projects /></div>
        <div ref={skillRef} className="mt-12 md:mt-24"><Skills /></div>
        <div ref={contactRef} className="mt-12 md:mt-24"><ContactMe /></div>
      </div>

    </div>
  );
};