
// import { useRef } from "react";
// import { Profile } from "../components/Profile";
// import { AboutMe } from "../components/AboutMe";
// import { Experience } from "../components/Experience";
// import { Projects } from "../components/Projects";
// import { ContactMe } from "../components/ContactME";
// import { NavBar } from "../components/NavBar";
// import { Skills } from "../components/Skills";

// export const Home = () => {
//   // All refs typed as HTMLDivElement | null
//   const aboutRef = useRef<HTMLDivElement | null>(null);
//   const experienceRef = useRef<HTMLDivElement | null>(null);
//   const projectsRef = useRef<HTMLDivElement | null>(null);
//   const contactRef = useRef<HTMLDivElement | null>(null);
//   const skillRef = useRef<HTMLDivElement | null>(null);


//   // Scroll function safely handles nullable refs
//   const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
    
//     <div className="min-h-screen bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-200 m-0 p-0">
//        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//       <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob top-10 left-10"></div>
      
//       <div className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-40 right-10"></div>
      
//       <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-10 left-1/2"></div>
//     </div>
//       {/* Navbar with optional scrolling */}
//       <NavBar
//         scrollToSection={scrollToSection}
//         refs={{ aboutRef, experienceRef, projectsRef, contactRef ,skillRef}}
//       />

//       {/* Profile section with buttons */}
//       <Profile
//         scrollToSection={scrollToSection}
//         experienceRef={experienceRef}
//         projectsRef={projectsRef}
//         contactRef={contactRef}
//         skillRef={skillRef}
//       />

//       {/* Sections */}
//       <div ref={aboutRef}>
//         <AboutMe />
//       </div>

//       <div ref={experienceRef}>
//         <Experience />
//       </div>

//       <div ref={projectsRef}
//       >
//         <Projects />
//       </div>

//       <div ref={skillRef}>
//         <Skills />
//       </div>

//       <div ref={contactRef}>
//         <ContactMe />
//       </div>
//     </div>
//   );
// };


// import { useRef } from "react";
// import { Profile } from "../components/Profile";
// import { AboutMe } from "../components/AboutMe";
// import { Experience } from "../components/Experience";
// import { Projects } from "../components/Projects";
// import { ContactMe } from "../components/ContactME";
// import { NavBar } from "../components/NavBar";
// import { Skills } from "../components/Skills";
// import ParticleBackground from "../components/Particles";

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
//     <div className="relative min-h-screen bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-200">

//       {/* 🔥 Animated Background */}
// <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

//   {/* Blob 1 */}
//   <div
//     className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-60 top-10 left-10"
//     style={{
//       animation: "blob 8s infinite ease-in-out"
//     }}
//   ></div>

//   {/* Blob 2 */}
//   <div
//     className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-60 top-40 right-10"
//     style={{
//       animation: "blob 8s infinite ease-in-out",
//       animationDelay: "2s"
//     }}
//   ></div>

//   {/* Blob 3 */}
//   <div
//     className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-60 bottom-10 left-1/2"
//     style={{
//       animation: "blob 8s infinite ease-in-out",
//       animationDelay: "4s",
//       background:"red"
//     }}
//   ></div>

// </div>
//  <ParticleBackground />


//       {/* ✅ Content Layer */}
//       <div className="relative z-10">

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

//         <div ref={aboutRef}>
//           <AboutMe />
//         </div>

//         <div ref={experienceRef}>
//           <Experience />
//         </div>

//         <div ref={projectsRef}>
//           <Projects />
//         </div>

//         <div ref={skillRef}>
//           <Skills />
//         </div>

//         <div ref={contactRef}>
//           <ContactMe />
//         </div>

//       </div>
//     </div>
//   );
// };


// import { useRef } from "react";
// import { Profile } from "../components/Profile";
// import { AboutMe } from "../components/AboutMe";
// import { Experience } from "../components/Experience";
// import { Projects } from "../components/Projects";
// import { ContactMe } from "../components/ContactME";
// import { NavBar } from "../components/NavBar";
// import { Skills } from "../components/Skills";
// import ParticleBackground from "../components/Particles";

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
//     <div className="relative min-h-screen bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-300">

//       {/* 🔥 Animated Blobs */}
//       <div className="absolute inset-0 -z-20 pointer-events-none">

//         <div
//           className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-10 left-10"
//           style={{ animation: "blob 8s infinite ease-in-out" }}
//         />

//         <div
//           className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-40 right-10"
//           style={{
//             animation: "blob 8s infinite ease-in-out",
//             animationDelay: "2s",
//           }}
//         />

//         <div
//           className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-60 mix-blend-multiply bottom-10 left-1/2"
//           style={{
//             animation: "blob 8s infinite ease-in-out",
//             animationDelay: "4s",
//           }}
//         />

//       </div>

//       {/* ✨ PARTICLES BACKGROUND */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <ParticleBackground />
//       </div>

//       {/* ✅ Content Layer */}
//       <div className="relative z-10">

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

//         <div ref={aboutRef}>
//           <AboutMe />
//         </div>

//         <div ref={experienceRef}>
//           <Experience />
//         </div>

//         <div ref={projectsRef}>
//           <Projects />
//         </div>

//         <div ref={skillRef}>
//           <Skills />
//         </div>

//         <div ref={contactRef}>
//           <ContactMe />
//         </div>

//       </div>
//     </div>
//     </div>
//   );
// };


import { useRef } from "react";
import { Profile } from "../components/Profile";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { ContactMe } from "../components/ContactME";
import { NavBar } from "../components/NavBar";
import { Skills } from "../components/Skills";
import ParticleBackground from "../components/Particles";

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
          className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-10 left-10"
          style={{ animation: "blob 8s infinite ease-in-out" }}
        />
        <div
          className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-60 mix-blend-multiply top-40 right-10"
          style={{ animation: "blob 8s infinite ease-in-out", animationDelay: "2s" }}
        />
        <div
          className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-60 mix-blend-multiply bottom-10 left-1/2"
          style={{ animation: "blob 8s infinite ease-in-out", animationDelay: "4s" }}
        />
      </div>

      {/* ✨ PARTICLES BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* ✅ Content Layer */}
      <div className="relative z-10 pt-5">
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
        <div ref={aboutRef}><AboutMe /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={skillRef}><Skills /></div>
        <div ref={contactRef}><ContactMe /></div>
      </div>

    </div>
  );
};